import * as React from 'react';
import FormField from '../../src/FormField';
import {formFieldTestkitFactory} from '../../testkit';
import {formFieldTestkitFactory as formFieldEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = formFieldTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = formFieldEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function FloatingNotificationWithMandatoryProps() {
  return <FormField />;
}

function FloatingNotificationWithAllProps() {
  return (
    <FormField
      id="formFieldId"
      infoContent="I help you to fill info"
      infoTooltipProps={{
        placement: 'left',
        content: 'content'
      }}
      label="This is an input:"
      required
      stretchContent
    />
  );

  function FloatingNotificationWithChildrenFunction() {
    return (
      <FormField
        id="formFieldId"
        infoContent="I help you to fill info"
        infoTooltipProps={{
          placement: 'left',
          content: 'content'
        }}
        label="This is an input:"
        required
        stretchContent>
        {({setCharactersLeft}) => {
          setCharactersLeft(5);
          return <span />;
        }}
      </FormField>
    );
  }
}
