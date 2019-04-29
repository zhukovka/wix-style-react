import * as React from 'react';
import Tooltip from '../../src/Tooltip';
import { tooltipTestkitFactory } from '../../testkit';
import { tooltipTestkitFactory as tooltipEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = tooltipTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });
  console.log(await vanilla.getAlignment());

  const enzyme = tooltipEnzymeTestkitFactory({
    dataHook: 'hi',
    wrapper: mount(<div/>),
  });
  console.log(await enzyme.getMaxWidth());
}

function TooltipNewContentWithMandatoryProps() {
  return <Tooltip upgrade content="Some contenttttttt" />;
}

function TooltipOldContentWithMandatoryProps() {
  return <Tooltip content="Some contenttttttt" />;
}

function TooltipNewContentWithAllProps() {
  return <Tooltip
    upgrade
    dataHook="some-data-hook"
    size="small"
    appendTo="scrollParent"
    content="hiiiiiiiii"
    maxWidth={900}
    moveBy={{x: 999, y: 1234}}
    onHide={() => {}}
    onShow={() => {}}
    placement="bottom-start"
    textAlign="start"
    zIndex={1999}
  />;
}

function TooltipOldContentWithAllProps() {
  return <Tooltip
    content={<div/>}
    textAlign="center"
    placement="left"
    alignment="left"
    theme="dark"
    showDelay={123}
    hideDelay={321}
    showTrigger="click"
    hideTrigger="click"
    active
    bounce
    disabled
    popover
    maxWidth={333}
    minWidth={444}
    onClickOutside={e => console.log(e)}
    color="#acacac"
    lineHeight={123}
    onShow={() => {
    }}
    onHide={() => {
    }}
    zIndex={999}
    appendToParent
    appendByPredicate={el => false}
    appendTo={document.createElement('div')}
    moveBy={{ x: 3 }}
    moveArrowTo={3}
    size="normal"
    shouldCloseOnClickOutside
    relative
    padding="0 0 0 0"
    shouldUpdatePosition
    showImmediately
    showArrow
  />;
}
