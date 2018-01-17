import React from 'react';
import times from 'lodash/times';

import ModalSelectorLayout from 'wix-style-react/ModalSelectorLayout';
import Button from 'wix-style-react/Button';
import Text from 'wix-style-react/Text';

const allItems = times(50, i => ({
  id: i,
  title: `Title ${i}`,
  subtitle: `Subtitle ${i}`,
  extraText: `Extra Text ${i}`,
  image: <img width="100%" height="100%" src="http://via.placeholder.com/100x100"/>
}));

export default {
  category: '4. Selection',
  storyName: '4.10 Modal Selector Layout',
  component: ModalSelectorLayout,
  componentPath: '../src/ModalSelectorLayout',

  componentProps: setState => ({
    dataHook: 'storybook-modal-selector-layout',
    height: '540px',
    onClose: () => setState({isOpen: false}),
    onCancel: () => setState({isOpen: false}),
    itemsPerPage: 4,
    dataSource: (searchQuery, offset, limit) =>
      new Promise(resolve =>
        setTimeout(() => {
          const filteredItems = allItems.filter(item => item.title.toLowerCase().startsWith(searchQuery.toLowerCase()));

          return resolve({
            items: filteredItems.slice(offset, offset + limit),
            totalCount: filteredItems.length
          });
        }, 2000)
      )
  }),

  exampleProps: {
    onOk: ({id, title, subtitle}) => JSON.stringify({id, title, subtitle}),
    onCancel: () => 'canceled',
    title: [
      ModalSelectorLayout.defaultProps.title,
      <Text key={0} appearance="T2">BOLD title</Text>
    ],
    subtitle: [
      '',
      'A list of items go below',
      <span key={0}>Some text and a <Button>button</Button></span>
    ]
  }
};
