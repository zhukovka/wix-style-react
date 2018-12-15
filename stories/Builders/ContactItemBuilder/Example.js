import React from 'react';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import { contactItemBuilder } from 'wix-style-react/ContactItemBuilder';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '284px',
  lineHeight: '22px',
};
const options = [
  contactItemBuilder({
    id: 0,
    title: 'Some Name',
    subtitle: 'some subtitle',
    imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
  }),
  contactItemBuilder({
    id: 1,
    title: 'Some Other Name',
    subtitle: 'some other subtitle',
  }),
  contactItemBuilder({ id: 2, title: 'No subtitle item' }),
  contactItemBuilder({
    id: 3,
    title: 'Siri Jacobsson',
    subtitle:
      'siri                                                                                                                                                                                                                                                            @wix.com',
    imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
  }),
  contactItemBuilder({
    id: 4,
    title: 'Some Item 1',
    subtitle: 'some item 1 subtitle',
  }),
  contactItemBuilder({
    id: 5,
    title: 'Some Item 2',
    subtitle: 'some item 2 subtitle',
  }),
];

export default () => (
  <div style={style}>
    <DropdownLayout visible selectedId={0} options={options} />
  </div>
);
