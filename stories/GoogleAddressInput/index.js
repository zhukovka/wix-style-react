import React from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import AutoDocs from '../utils/Components/AutoDocs';
import CodeExample from '../utils/Components/CodeExample';

import GoogleAddressInputSource from '!raw-loader!wix-style-react/GoogleAddressInput/GoogleAddressInput';
import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';
import ExampleControlledWithFooter from './ExampleControlledWithFooter';
import ExampleControlledWithFooterRaw from '!raw-loader!./ExampleControlledWithFooter';
import ExampleControlledWithGoogleFooter from './ExampleControlledWithGoogleFooter';
import ExampleControlledWithGoogleFooterRaw from '!raw-loader!./ExampleControlledWithGoogleFooter';

class EnsureGoogleMaps extends React.Component {
  state = {
    isMapsLoaded: false
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  componentWillMount() {
    if (!window.google) {
      const googleScript = document.createElement('script');
      googleScript.src = '//maps.googleapis.com/maps/api/js?client=gme-wixcomltd1&libraries=places&language=iwp';
      googleScript.onload = () => this.setState({isMapsLoaded: true});
      document.head.appendChild(googleScript);
    } else {
      this.setState({isMapsLoaded: true});
    }
  }

  render() {
    return (
      <div>
        { this.state.isMapsLoaded ? this.props.children : 'Unable to load Google Maps API :(' }
      </div>
    );
  }
}

storiesOf('Core', module)
  .add('GoogleAddressInput', () => (
    <EnsureGoogleMaps>
      <AutoDocs source={GoogleAddressInputSource}/>

      <h1>Usage examples</h1>

      <CodeExample title="Controlled input" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

      <CodeExample title="Controlled input - with a footer" code={ExampleControlledWithFooterRaw}>
        <ExampleControlledWithFooter/>
      </CodeExample>

      <CodeExample title="Controlled input - with a google fixed footer" code={ExampleControlledWithGoogleFooterRaw}>
        <ExampleControlledWithGoogleFooter/>
      </CodeExample>
    </EnsureGoogleMaps>
  ));
