import React from 'react';
import Page from 'wix-style-react/Page';
import PageHeader from 'wix-style-react/Page/PageHeader';
import s from './Page.scss';
import Content from './Content';
import Breadcrumbs from './Breadcrumbs';
import PropTypes from 'prop-types';

export default class PageWrapper extends React.Component {
  render() {
    const {title, showBreadcrumbs, subtitle, showBackButton} = this.props;

    return (
      <div className={s.container}>
        <Page>
          <Page.Header>
            <PageHeader
              breadcrumbs={showBreadcrumbs && <Breadcrumbs/>}
              title={title}
              subtitle={subtitle}
              showBackButton={showBackButton}
              />
          </Page.Header>
          <Page.Content>
            <Content/>
          </Page.Content>
        </Page>
      </div>);
  }
}

PageWrapper.propTypes = {
  ...PageHeader.propTypes,
  showBreadcrumbs: PropTypes.bool
};
