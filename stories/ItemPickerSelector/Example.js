import { ItemPickerSelector } from 'wix-style-react/ItemPickerSelector';
import EmptyState from 'wix-style-react/EmptyState';
import Text from 'wix-style-react/Text';
import TextLink from 'wix-style-react/TextLink';
import Add from 'wix-style-react/new-icons/Add';
import { ContactItemBuilder } from 'wix-style-react/ContactItemBuilder';
import Button from 'wix-style-react/Button';
import * as React from "react";

function fetchItems({ query }) {
  const items = [
    { id: 0, title: 'Some Name', subtitle: 'some subtitle', imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg' },
    { id: 1, title: 'Some Other Name', subtitle: 'some other subtitle' },
    { id: 2, title: 'No subtitle item' },
    { id: 3, title: 'Siri Jacobsson', subtitle: 'siri                                                                                                                                                                                                                                                            @wix.com', imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg' },
    { id: 4, title: 'Some Item 1', subtitle: 'some item 1 subtitle' },
    { id: 5, title: 'Some Item 2', subtitle: 'some item 2 subtitle' }
  ];
  if (query === '') {
    return Promise.resolve(items);
  } else {
    return Promise.resolve(items.filter(x => x.title.includes(query)));
  }
}

const emptyStateComponent = (
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
      <TextLink prefixIcon={<Add />}>Add Contact</TextLink>
    </EmptyState>
  </div>
);

const itemBuilder = ContactItemBuilder;

const footer = (
  <div>
    <TextLink data-hook="footer" prefixIcon={<Add />}>
      Add Contact
    </TextLink>
  </div>
);

const button = <Button>Toggle picker tooltip</Button>;

const onSelect = item => item + ' selected!';


export default () => (
  <ItemPickerSelector
    fetchitems={fetchItems}
    footer={footer}
    emptyStateComponent={emptyStateComponent}
    itemBuilder={itemBuilder}
    button={button}
    fetchItems={fetchItems}
    onSelect={onSelect}
  />
);
