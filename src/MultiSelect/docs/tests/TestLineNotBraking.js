import MultiSelect from '../../MultiSelect';
import React from 'react';

export default () => (
  <div style={{ width: '400px' }}>
    <MultiSelect
      dataHook="multi-select-line-not-braking"
      tags={[
        { id: '1', label: 'a' },
        { id: '2', label: 'b' },
        { id: '3', label: 'c' },
        { id: '4', label: 'd' },
        { id: '5', label: 'e' },
        { id: '6', label: 'f' },
        { id: '7', label: 'f' },
      ]}
    />
  </div>
);
