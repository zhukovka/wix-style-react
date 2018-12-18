import React from 'react';
import { mount } from 'enzyme';
import { render, cleanup } from 'react-testing-library';
import path from 'path';

import {
  isEnzymeTestkitExists,
  isUniEnzymeTestkitExists,
} from 'wix-ui-test-utils/enzyme';
import { isTestkitExists, isUniTestkitExists } from 'wix-ui-test-utils/vanilla';

import importAllComponents from '../test/utils/import-all-components';

import COMPONENT_DEFINITIONS from './component-definitions.js';

import * as reactTestUtilsTestkitFactories from './index';
import * as enzymeTestkitFactories from './enzyme';

const IGNORED_COMPONENTS = Object.entries(COMPONENT_DEFINITIONS)
  .filter(([, { ignore }]) => ignore)
  .map(([name]) => name);

const noop = () => {};
const cwd = path.resolve(__dirname, '..', 'src');
const lowerFirst = a =>
  a
    .charAt(0)
    .toLowerCase()
    .concat(a.slice(1));

const AllComponents = importAllComponents({
  cwd,
  ignore: IGNORED_COMPONENTS,
});

const attachHooks = (beforeAllHook, afterAllHook) => {
  beforeAll(async () => await beforeAllHook());
  afterAll(async () => await afterAllHook());
};

const DRIVER_ASSERTS = {
  enzyme: ({ name, component, props, beforeAllHook, afterAllHook }) => {
    describe('Enzyme testkits', () => {
      attachHooks(beforeAllHook, afterAllHook);

      it(`${name} should have enzyme testkit`, () =>
        expect(
          isEnzymeTestkitExists(
            React.createElement(component, props),
            enzymeTestkitFactories[`${lowerFirst(name)}TestkitFactory`],
            mount,
          ),
        ).toBe(true));
    });
  },

  vanilla: ({ name, component, props, beforeAllHook, afterAllHook }) => {
    describe('ReactTestUtils testkits', () => {
      attachHooks(beforeAllHook, afterAllHook);
      it(`${name} should have ReactTestUtils testkit`, () =>
        expect(
          isTestkitExists(
            React.createElement(component, props),
            reactTestUtilsTestkitFactories[`${lowerFirst(name)}TestkitFactory`],
          ),
        ).toBe(true));
    });
    describe('ReactTestUtils update dataHook', () => {
      attachHooks(beforeAllHook, afterAllHook);
      /* eslint-disable jest/no-disabled-tests */
      xit(`${name} should have an updated dataHook`, () => {
        /* eslint-enable jest/no-disabled-tests */
        const hook1 = 'my-data-hook-1';
        const hook2 = 'my-data-hook-2';
        const { rerender, container } = render(
          React.createElement(component, { ...props, dataHook: hook1 }),
        );
        expect(
          !!container.querySelector(`[data-hook="${hook1}"]`),
        ).toBeTruthy();

        rerender(React.createElement(component, { ...props, dataHook: hook2 }));
        expect(
          !!container.querySelector(`[data-hook="${hook2}"]`),
        ).toBeTruthy();
        cleanup();
      });
    });
  },
};

const UNIDRIVER_ASSERTS = {
  enzyme: ({ name, component, props, beforeAllHook, afterAllHook }) => {
    describe('Enzyme unidriver testkits', () => {
      attachHooks(beforeAllHook, afterAllHook);
      it(`${name} should have enzyme testkit`, () =>
        expect(
          isUniEnzymeTestkitExists(
            React.createElement(component, props),
            enzymeTestkitFactories[`${lowerFirst(name)}TestkitFactory`],
            mount,
          ),
        ).resolves.toBe(true));
    });
  },

  vanilla: ({ name, component, props, beforeAllHook, afterAllHook }) => {
    describe('ReactTestUtils unidriver testkits', () => {
      attachHooks(beforeAllHook, afterAllHook);
      it(`${name} should have ReactTestUtils testkit`, () =>
        expect(
          isUniTestkitExists(
            React.createElement(component, props),
            reactTestUtilsTestkitFactories[`${lowerFirst(name)}TestkitFactory`],
          ),
        ).resolves.toBe(true));
    });
  },
};

Object.entries(AllComponents).forEach(([name, component]) => {
  const definition = COMPONENT_DEFINITIONS[name] || {};

  const config = {
    beforeAllHook: noop,
    afterAllHook: noop,
    props: {},
    ...definition,
    name,
    component,
  };

  const asserts = definition.unidriver ? UNIDRIVER_ASSERTS : DRIVER_ASSERTS;

  if (definition.drivers) {
    definition.drivers.forEach(driver => asserts[driver](config));
  } else {
    Object.keys(asserts).forEach(driver => asserts[driver](config));
  }
});
