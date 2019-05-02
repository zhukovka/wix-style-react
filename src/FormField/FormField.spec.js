/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';

import Label from '../Label';
import styles from './FormField.scss';
import formFieldDriverFactory from './FormField.driver';
import { formFieldUniDriverFactory } from './FormField.uni.driver';

import FormField from '.';

describe('FormField', () => {
  const renderFormField = (props = {}) => (
    <FormField {...{ ...props, children: props.children || <div /> }} />
  );
  const label = 'field label';

  describe('[sync]', () => {
    runTests(createRendererWithDriver(formFieldDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(formFieldUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    describe('`label` prop', () => {
      it('should render contents', async () => {
        const { driver } = render(renderFormField({ label }));
        expect((await driver.getLabel()).innerHTML).toMatch(label);
      });

      it('should not render div when `label` is undefined', async () => {
        const { driver } = render(renderFormField());
        expect(await driver.getLabel()).toEqual(null);
      });
    });

    describe('`labelPlacement` prop', () => {
      it('should render the label on top', async () => {
        const { driver } = render(
          renderFormField({ label, labelPlacement: 'top' }),
        );
        expect((await driver.getLabel()).innerHTML).toMatch(label);
      });

      it('should render the label on the right', async () => {
        const { driver } = render(
          renderFormField({ label, labelPlacement: 'right' }),
        );
        expect((await driver.getLabel()).innerHTML).toMatch(label);
      });

      it('should render the label on the left', async () => {
        const { driver } = render(
          renderFormField({ label, labelPlacement: 'left' }),
        );
        expect((await driver.getLabel()).innerHTML).toMatch(label);
      });
    });

    describe('required', () => {
      const required = true;

      describe('given `label` and `required` props', () => {
        it('should render as required', async () => {
          const { driver } = render(renderFormField({ label, required }));
          expect(await driver.isRequired()).toEqual(true);
        });
      });

      describe('given only `required` prop', () => {
        it('should render it inline', async () => {
          const { driver } = render(renderFormField({ required }));
          expect(await driver.isRequired()).toEqual(true);
          expect(await driver.exists()).toEqual(true);
          expect(
            !!(await driver.element()).querySelector(
              '[data-hook="formfield-inline-suffixes"]',
            ),
          ).toEqual(true);
        });
      });

      it('should not render when `required` prop', async () => {
        const { driver } = render(renderFormField());
        expect(await driver.isRequired()).toEqual(false);
      });
    });

    describe('`infoContent` icon with tooltip', () => {
      const infoContent = 'hello from tooltip';
      const tooltipProps = {
        relative: true,
        appendToParent: true,
        showDelay: 0,
      };

      it('should display `infoContent` value in tooltip', async () => {
        const { driver } = render(
          renderFormField({ infoContent, tooltipProps }),
        );
        expect(await driver.getInfoContent()).toBe(infoContent);
      });

      describe('given `label`', () => {
        const props = { label, infoContent, tooltipProps };

        it('should display `infoContent` value in tooltip', async () => {
          const { driver } = render(renderFormField(props));
          expect(await driver.getInfoContent()).toBe(infoContent);
        });
      });
    });

    describe('`children` prop', () => {
      class Children extends React.Component {
        componentDidMount() {
          this.props.onMount();
        }
        render() {
          return <div />;
        }
      }

      it('should be rendered', async () => {
        const text = 'hello';
        const { driver } = render(renderFormField({ children: text }));
        expect((await driver.getChildren()).textContent).toEqual(text);
      });

      it('should apply minHeight on label wrapper when there is no children', async () => {
        const { driver } = render(<FormField label="Text" />);
        expect(await driver.exists()).toEqual(true);
        expect(
          (await driver.element()).querySelector(`.${styles.minLabelHeight}`),
        ).not.toBeNull();
      });

      describe('when function', () => {
        const setCharactersLeftOnMount = charactersLeft => ({
          setCharactersLeft,
        }) => <Children onMount={() => setCharactersLeft(charactersLeft)} />;

        it('should receive setCharactersLeft', async () => {
          const children = jest.fn();
          render(renderFormField({ children }));
          expect(typeof children.mock.calls[0][0].setCharactersLeft).toBe(
            'function',
          );
        });

        describe('setCharactersLeft', () => {
          it('should display counter when `setCharactersLeft` called', async () => {
            const charactersLeft = 87987;
            const { driver } = render(
              renderFormField({
                label,
                children: setCharactersLeftOnMount(charactersLeft),
              }),
            );
            expect(await driver.getLengthLeft()).toBe(charactersLeft);
          });

          it('should display different color when lengthLeft < 0', async () => {
            const charactersLeft = -1;
            const { driver } = render(
              renderFormField({
                label,
                children: setCharactersLeftOnMount(charactersLeft),
              }),
            );
            expect(await driver.isLengthExceeded()).toBe(true);
          });

          it('should display 0 when lengthLeft === 0', async () => {
            const charactersLeft = 0;
            const { driver } = render(
              renderFormField({
                label,
                children: setCharactersLeftOnMount(charactersLeft),
              }),
            );
            expect(await driver.getLengthLeft()).toBe(0);
          });

          it('should display counter even when label is empty', async () => {
            const charactersLeft = 50;
            const { driver } = render(
              renderFormField({
                children: setCharactersLeftOnMount(charactersLeft),
              }),
            );
            expect(await driver.getLengthLeft()).toBe(charactersLeft);
          });

          it('should display counter when label is placed on the right', async () => {
            const charactersLeft = 50;
            const { driver } = render(
              renderFormField({
                label,
                labelPlacement: 'right',
                children: setCharactersLeftOnMount(charactersLeft),
              }),
            );
            expect(await driver.getLengthLeft()).toBe(charactersLeft);
          });

          it('should display counter when label is placed on the left', async () => {
            const charactersLeft = 50;
            const { driver } = render(
              renderFormField({
                label,
                labelPlacement: 'left',
                children: setCharactersLeftOnMount(charactersLeft),
              }),
            );
            expect(await driver.getLengthLeft()).toBe(charactersLeft);
          });
        });
      });
    });
  }

  it('should have correct displayName', () => {
    const wrapper = mount(renderFormField());
    expect(wrapper.name()).toEqual('FormField');
  });

  describe('`id` prop', () => {
    const id = 'five';

    it('should be added to label as `htmlFor` prop', () => {
      const wrapper = mount(renderFormField({ id, label }));
      expect(wrapper.find(Label).prop('for')).toEqual(id);
    });
  });
});
