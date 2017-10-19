import {normalize} from 'path';

import React from 'react';
import PropTypes from 'prop-types';

import parser from '../AutoDocs/parser';

export default class ComponentMetaInfoGetter extends React.PureComponent {
  static propTypes = {
    componentSrcFolder: PropTypes.string,
    showStoryContent: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      isLoading: true,
      source: undefined,
      readmeTestKit: undefined,
      component: undefined,
      parsedSource: undefined
    };
  }

  componentDidMount() {
    const {
      componentSrcFolder
    } = this.props;

    if (!componentSrcFolder) {
      this.setState({
        isLoading: false
      });
      return;
    }

    const componentSourcePromise = this.getComponentSource();
    Promise.all([
      componentSourcePromise,
      this.getReadmeTestKit(),
      this.getComponentInstance(),
      this.getParsedSource(componentSourcePromise),
      this.getComponentReadme()
    ]).then(([source, readmeTestKit, component, parsedSource]) => {
      this.setState({
        isLoading: false,
        source,
        readmeTestKit,
        component,
        parsedSource
      });
    });
  }

  render() {
    return this.props.showStoryContent(this.state);
  }

  getComponentSource(additionalPath = '') {
    const {
      componentSrcFolder
    } = this.props;

    const resolvedPath = normalize(`${componentSrcFolder}/${additionalPath}`);
    return import(`!raw-loader!wix-style-react/${resolvedPath}`).then(source => {
      const sourceContainsOneLine = source.trim().split('\n').length === 1;
      const onlyDefaultExportPresent = source.startsWith('export {default} from');
      if (sourceContainsOneLine && onlyDefaultExportPresent) {
        let newSourcePath = '';
        source.replace(/(?!['"])([./a-z]+)(?=['"])/gi, match => {
          newSourcePath = match;
        });

        newSourcePath = newSourcePath.replace(/^\.\//, '/');

        return this.getComponentSource(`${additionalPath}${newSourcePath}`);
      }

      return source;
    });
  }

  getComponentInstance() {
    return import(`wix-style-react/${this.props.componentSrcFolder}/`).then(component => component.default).catch(console.warn);
  }

  getParsedSource(componentSourcePromise) {
    return componentSourcePromise.then(source => {
      const parsedSourceRaw = parser(source);
      const {
        composes = [],
        ...parsedSource
      } = parsedSourceRaw;

      if (composes.length) {
        const promises = composes.map(dependencyModulePath => this.getComponentSource(dependencyModulePath));

        return Promise.all(promises).then(dependencySources => {
          parsedSource.props = dependencySources.reduce(
            (acc, dependencySource) => {
              const parsedDependencySource = parser(dependencySource);
              return {
                ...parsedDependencySource.props,
                ...acc
              };
            },
            parsedSource.props
          );

          return parsedSource;
        });
      }
    });
  }

  getComponentReadme() {
    return this.loadMdFile('README');
  }

  getReadmeTestKit() {
    return this.loadMdFile('README.TESTKIT');
  }

  loadMdFile(fileName) {
    const baseName = fileName.endsWith('.md') ? fileName.replace(/\.md$/gi, '') : fileName;
    return import(`wix-style-react/${this.props.componentSrcFolder}/${baseName}.md`).catch(console.error);
  }
}
