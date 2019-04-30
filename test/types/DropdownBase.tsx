import * as React from 'react';
import DropdownBase from '../../src/DropdownBase';
import {dropdownBaseTestkitFactory} from '../../testkit';
import {dropdownBaseTestkitFactory as dropdownBaseEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = dropdownBaseTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = dropdownBaseEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function DropdownBaseWithMandatoryProps() {
  return <DropdownBase />;
}

function DropdownBaseWithAllProps() {
  return (
    <DropdownBase
      appendTo="parent"
      dataHook="hook"
      initialSelectedId={0}
      maxWidth={10}
      minWidth={10}
      onClickOutside={() => undefined}
      onMouseEnter={() => undefined}
      onMouseLeave={() => undefined}
      onSelect={o => undefined}
      open
      options={[
        {
          disabled: true,
          id: 1,
          overrideStyle: true,
          value: 1
        },
        {
          value: '-'
        }
      ]}
      placement="bottom"
      selectedId={0}
      showArrow
    />
  );
}

function DropdownBaseWithChildrenAsFunction() {
  return (
    <DropdownBase>
      {({delegateKeyDown, close, open, selectedOption, toggle}) => {
        close();
        open();
        console.log(selectedOption);
        toggle();
        return <span onKeyDown={delegateKeyDown} />;
      }}
    </DropdownBase>
  );
}
