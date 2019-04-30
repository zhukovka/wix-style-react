import * as React from 'react';
import EditableSelector from '../../src/EditableSelector';
import {editableSelectorTestkitFactory} from '../../testkit';
import {editableSelectorTestkitFactory as editableSelectorEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = editableSelectorTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = editableSelectorEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function EditableSelectorWithMandatoryProps() {
  return <EditableSelector />;
}

function EditableSelectorWithAllProps() {
  return (
    <EditableSelector
      dataHook="hook"
      editButtonText="txt"
      newRowLabel="lbl"
      onOptionAdded={({newTitle}) => undefined}
      onOptionDelete={({index}) => undefined}
      onOptionToggle={id => undefined}
      onOptionEdit={({index, newTitle}) => undefined}
      title="title"
      toggleType="checkbox"
      options={[
        {
          isSelected: true,
          title: 'asd'
        },
        {
          title: 'foo'
        }
      ]}
    />
  );
}
