import React from 'react';

import { contactItemBuilder } from "wix-style-react/ContactItemBuilder";
import EmptyState from "wix-style-react/EmptyState";
import Text from "wix-style-react/Text";
import Add from "wix-style-react/Add";
import TextLink from "wix-style-react/TextLink";
import { ItemPickerSelector } from "./ItemPickerSelector";

export class Example extends React.Component {
  render = () => {

    const fetchItems = ({ query }) => {
      const items = [
        {
          id: 0,
          title: 'Title with image',
          subtitle: 'subtitle with image',
          imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg'
        },
        { id: 1, title: 'No image title', subtitle: 'No image subtitle' },
        { id: 2, title: 'No subtitle item' },
      ];
      if (query === '') {
        return Promise.resolve(items);
      } else {
        return Promise.resolve(items.filter(x => x.title.toLowerCase().includes(query.toLowerCase())));
      }
    };

    const emptyStateComponent =
      <div>
        <EmptyState
          dataHook={'empty-message'}
          title="No contacts found."
          subtitle={
            <Text>
              Add or import contacts <a href="http://wwww.wix.com"> Learn more </a>
            </Text>
          }
        >
          <TextLink prefixIcon={<Add/>}>Add Contact</TextLink>
        </EmptyState>
      </div>;


    const footer =
      <div>
        <TextLink prefixIcon={<Add/>}>
          Add Contact
        </TextLink>
      </div>;

    const onSelect = item => item + ' selected!';

    return <ItemPickerSelector
      fetchItems={fetchItems}
      footer={footer}
      emptyStateComponent={emptyStateComponent}
      itemBuilder={contactItemBuilder}
      onSelect={onSelect}
    />
  }
}
