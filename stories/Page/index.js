import React from 'react';
import PropTypes from 'prop-types';
import story from '../utils/Components/Story';
import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import Content from './Content';
import Breadcrumbs from './Breadcrumbs';
import './Page.scss';

class StoryWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div data-hook="story-page">
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

story({
  category: '10. Page',
  storyName: '10.1 Page',
  name: 'Page',
  componentSrcFolder: 'Page',
  component: StoryWrapper,
  componentProps: {
    children: (<Page>
      <Page.Header
        breadcrumbs={<Breadcrumbs/>}
        title="Page Title"
        subtitle="Page subtitle"
        showBackButton
        onBackClicked={(() => {})}
        actionsBar={(<Button>Action</Button>)}
        />
      <Page.Content>
        <Content/>
      </Page.Content>
    </Page>)
  }
});
