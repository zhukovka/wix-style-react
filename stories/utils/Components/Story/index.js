import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from '../Markdown';
import CodeBlock from '../CodeBlock';
import AutoDocs from '../AutoDocs';
import AutoExample from '../AutoExample';
import TabbedView from '../TabbedView';
import styles from './styles.scss';

import TextLink from 'wix-style-react/TextLink';

export default ({
  category,
  name,
  readme,
  readmeTestkit,
  source,
  component,
  componentProps = {},
  examples = null
}) =>
  storiesOf(category, module).add(name, () =>
    <TabbedView tabs={['Usage', 'API', 'TestKit']}>
      <div className={styles.usage}>
        {readme ?
          <Markdown source={readme}/> :
          <Markdown source={`# \`<${name}/>\``}/>
        }

        {name &&
          <div className={styles.githubLink}>
            <TextLink
              link={`https://github.com/wix/wix-style-react/blob/master/src/${name}`}
              target="_blank"
              >
              View source on GitHub
            </TextLink>
          </div>
        }

        {name && <CodeBlock source={`import ${name} from 'wix-style-react/${name}';`}/>}

        {component && source && <AutoExample {...{component, source, componentProps}}/>}

        {examples}
      </div>

      {source && <AutoDocs source={source}/>}

      {readmeTestkit && <Markdown source={readmeTestkit}/>}
    </TabbedView>
  );
