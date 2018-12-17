import * as React from 'react';
import { ItemPickerSelector } from '../../src/ItemPickerSelector';
import EmptyState from '../../src/EmptyState/EmptyState';
import Text from '../../src/Text/Text';
import TextLink from '../../src/TextLink/TextLink';
import Add from '../../new-icons/Add';
import { contactItemBuilder } from '../../src/ContactItemBuilder';

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
      <TextLink prefixIcon={<Add />}>Add Contact</TextLink>
    </EmptyState>
  </div>;


const footer =
  <div>
    <TextLink data-hook="footer" prefixIcon={<Add />}>
      Add Contact
    </TextLink>
  </div>;

const itemBuilder = contactItemBuilder;

const onSelect = item => item + ' selected!';

export default {
  category: '12. Other',
  storyName: '12.7 ItemPickerSelector',
  component: ItemPickerSelector,
  componentPath: '../../src/ItemPickerSelector/ItemPickerSelector.js',
  componentProps: {
    footer,
    emptyStateComponent,
    itemBuilder,
    fetchItems,
    onSelect
  },

  examples: (
    <ItemPickerSelector
      fetchItems={fetchItems}
      footer={footer}
      emptyStateComponent={emptyStateComponent}
      itemBuilder={itemBuilder}
      onSelect={onSelect}
    />
  ),
};
