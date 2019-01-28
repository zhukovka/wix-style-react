import React from 'react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import TextLink from 'wix-style-react/TextLink';
import EmptyState from 'wix-style-react/EmptyState';
import { Add } from 'wix-style-react/new-icons';

import ImagePlaceholder from '../assets/ImagePlaceholder';

const ExampleEmptyState = () => (
  <Page>
    <Page.Header
      title="Your Product"
      actionsBar={
        <Button withNewIcons prefixIcon={<Add />}>
          New Item
        </Button>
      }
    />

    <Page.Content>
      <EmptyState
        theme="page"
        title="You don't have any items yet"
        subtitle="Create your product item in an easy & fast way to display it on your website"
        image={<ImagePlaceholder />}
      >
        <TextLink prefixIcon={<Add />}>New Item</TextLink>
      </EmptyState>
    </Page.Content>
  </Page>
);

export default ExampleEmptyState;
