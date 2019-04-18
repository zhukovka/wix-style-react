import React from 'react';
import { mount } from 'enzyme';
import notificationDriverFactory from './Notification.driver';
import { notificationUniDriverFactory } from './Notification.uni.driver';
import {
  notificationTestkitFactory as enzymeNotificationTestkitFactory,
  buttonTestkitFactory as enzymeButtonTestkitFactory,
} from '../../testkit/enzyme';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/unit';

import Notification from './Notification';
import Button from '../Button';
import TextButton from '../TextButton';

const renderNotificationWithProps = (props = {}) => (
  <Notification {...props}>
    <Notification.TextLabel>label</Notification.TextLabel>
    <Notification.CloseButton />
  </Notification>
);

describe('Notification', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(notificationDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(notificationUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());
    const createDriver = jsx => render(jsx).driver;

    describe('Visibility', () => {
      it('should verify component exists', async () => {
        const driver = createDriver(renderNotificationWithProps());
        expect(await driver.exists()).toBeTruthy();
      });

      it('should be visible', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true }),
        );
        expect(await driver.visible()).toBeTruthy();
      });

      it('should not be visible', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: false }),
        );
        expect(await driver.visible()).toBeFalsy();
      });
    });

    describe('Themes', () => {
      it('should support default theme', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true }),
        );
        expect(await driver.isStandardNotification()).toBeTruthy();
        expect(await driver.hasTheme('standard')).toBeTruthy();
      });

      it('should support standard theme', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, theme: 'standard' }),
        );
        expect(await driver.isStandardNotification()).toBeTruthy();
      });

      it('should support error theme', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, theme: 'error' }),
        );
        expect(await driver.isErrorNotification()).toBeTruthy();
      });

      it('should support success theme', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, theme: 'success' }),
        );
        expect(await driver.isSuccessNotification()).toBeTruthy();
      });

      it('should support warning theme', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, theme: 'warning' }),
        );
        expect(await driver.isWarningNotification()).toBeTruthy();
      });

      it('should support premium theme', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, theme: 'premium' }),
        );
        expect(await driver.isPremiumNotification()).toBeTruthy();
      });
    });

    describe('Content', () => {
      describe('Label', () => {
        it('should show have a text to show', async () => {
          const labelText = 'Label Text';
          const driver = createDriver(
            <Notification show>
              <Notification.TextLabel>{labelText}</Notification.TextLabel>
              <Notification.CloseButton />
            </Notification>,
          );
          expect(await driver.getLabelText()).toEqual(labelText);
        });
      });

      describe('Action Button', () => {
        it('should have an action button', async () => {
          const actionButtonText = 'Action Button Text';
          const driver = createDriver(
            <Notification show>
              <Notification.TextLabel>label</Notification.TextLabel>
              <Notification.ActionButton>
                {actionButtonText}
              </Notification.ActionButton>
              <Notification.CloseButton />
            </Notification>,
          );
          expect(await driver.getActionButtonText()).toEqual(actionButtonText);
        });

        it('should not have an action button', async () => {
          const driver = createDriver(
            renderNotificationWithProps({ show: true }),
          );
          expect(await driver.hasActionButton()).toBeFalsy();
        });

        it('should call the supplied onClick handler when clicked', async () => {
          const onClickMock = jest.fn();

          const driver = createDriver(
            <Notification show>
              <Notification.TextLabel>label</Notification.TextLabel>
              <Notification.ActionButton onClick={onClickMock}>
                action
              </Notification.ActionButton>
              <Notification.CloseButton />
            </Notification>,
          );

          await driver.clickOnActionButton();

          expect(onClickMock).toBeCalled();
        });
      });

      describe('Close Button', () => {
        it('should have a close button (with action button)', async () => {
          const driver = createDriver(
            renderNotificationWithProps({ show: true }),
          );
          expect(await driver.hasCloseButton()).toBeTruthy();
        });

        it('should have a close button (without action button)', async () => {
          const driver = createDriver(
            renderNotificationWithProps({ show: true }),
          );
          expect(await driver.hasActionButton()).toBeFalsy();
          expect(await driver.hasCloseButton()).toBeTruthy();
        });
      });
    });

    describe('Type', () => {
      it('should set default type to global and position relative', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true }),
        );
        expect(await driver.isRelativelyPositioned()).toBeTruthy();
      });

      it('should set the type to global and position relative', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, type: 'global' }),
        );
        expect(await driver.isRelativelyPositioned()).toBeTruthy();
      });

      it('should set the type to local and position absolute', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, type: 'local' }),
        );
        expect(await driver.isAbsolutePositioned()).toBeTruthy();
      });

      it('should set the type to sticky and position fixed', async () => {
        const driver = createDriver(
          renderNotificationWithProps({ show: true, type: 'sticky' }),
        );
        expect(await driver.isFixedPositioned()).toBeTruthy();
      });
    });

    describe(`Closing`, () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      describe('Closing when clicking on close button', () => {
        it('should close the notification', async () => {
          const { driver } = render(
            renderNotificationWithProps({ show: true }),
          );
          await driver.clickOnCloseButton();
          jest.runAllTimers(); // for animations
          expect(await driver.visible()).toBeFalsy();
        });

        it('should allow reopening the notification after closed by close button', async () => {
          const { driver, rerender } = render(
            renderNotificationWithProps({ show: true }),
          );
          await driver.clickOnCloseButton();
          jest.runAllTimers(); // for animations
          expect(await driver.visible()).toBeFalsy();
          rerender(renderNotificationWithProps({ show: true }));
          expect(await driver.visible()).toBeTruthy();
        });
      });

      describe(`AutoHide`, () => {
        const someTimeout = 132;
        const renderNewNotification = props =>
          renderNotificationWithProps({ ...props });

        it(`should keep notification shown regardless of any timers`, async () => {
          const driver = createDriver(renderNewNotification({ show: true }));
          jest.runAllTimers();

          expect(await driver.visible()).toBeTruthy();
          expect(setTimeout).not.toBeCalled();
        });

        it('should auto-hide after a given timeout', async () => {
          const driver = createDriver(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );

          expect(await driver.visible()).toBeTruthy();
          jest.runAllTimers();
          expect(await driver.visible()).toBeFalsy();
        });

        it('should be able to show notification again after timeout', async () => {
          const { driver, rerender } = render(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );

          jest.runAllTimers();
          expect(await driver.visible()).toBeFalsy();
          jest.clearAllTimers();

          rerender(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );
          expect(await driver.visible()).toBeTruthy();
        });

        it('should auto-hide after starting from a closed status', async () => {
          const { driver, rerender } = render(
            renderNewNotification({
              show: false,
              autoHideTimeout: someTimeout,
            }),
          );

          jest.runAllTimers();
          expect(await driver.visible()).toBeFalsy();
          rerender(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );
          expect(await driver.visible()).toBeTruthy();
          jest.runAllTimers();
          expect(await driver.visible()).toBeFalsy();
        });
      });

      afterEach(() => {
        jest.clearAllTimers();
      });
    });

    describe('Style', () => {
      it('should accept a z-index', async () => {
        const zIndex = 999;
        const driver = createDriver(
          renderNotificationWithProps({ show: true, zIndex }),
        );
        expect(await driver.getZIndex()).toEqual(zIndex);
      });
    });
  }

  describe('Notification.ActionButton', () => {
    it('should display a Button when passing by default', async () => {
      const component = mount(
        <Notification.ActionButton>Action Button</Notification.ActionButton>,
      );

      expect(component.find('Button')).toHaveLength(1);
    });

    it('should display a Button when explicitly required', async () => {
      const component = mount(
        <Notification.ActionButton type="button">
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find('Button')).toHaveLength(1);
    });

    it('should display a TextButton when explicitly required', () => {
      const component = mount(
        <Notification.ActionButton type="textLink" link="some link">
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find(TextButton)).toHaveLength(1);
    });

    it('should render TextButton with target received from props', () => {
      const target = 'some target';
      const component = mount(
        <Notification.ActionButton type="textLink" link="some link" target={target}>
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find(TextButton).props().target).toEqual(target);
    });

    it('should render TextButton with target _self as default', () => {
      const component = mount(
        <Notification.ActionButton type="textLink" link="some link">
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find(TextButton).props().target).toEqual('_self');
    });
  });

  describe('enzyme testkit', () => {
    class ControlledNotification extends React.Component {
      constructor(props) {
        super(props);

        this.state = { showNotification: false };
      }

      render() {
        return (
          <div>
            <Button
              dataHook="button_dh"
              onClick={() =>
                this.setState({
                  showNotification: !this.state.showNotification,
                })
              }
            >
              button
            </Button>
            <Notification
              dataHook="notification_dh"
              show={this.state.showNotification}
            >
              <Notification.TextLabel>label</Notification.TextLabel>
              <Notification.CloseButton />
            </Notification>
          </div>
        );
      }
    }

    it('should exist', async () => {
      const component = mount(<ControlledNotification />);

      const enzymeNotificationTestkit = enzymeNotificationTestkitFactory({
        wrapper: component,
        dataHook: 'notification_dh',
      });
      const enzymeButtonTestkit = enzymeButtonTestkitFactory({
        wrapper: component,
        dataHook: 'button_dh',
      });

      expect(enzymeNotificationTestkit.visible()).toBeFalsy();
      expect(enzymeButtonTestkit.exists()).toBeTruthy();

      await enzymeButtonTestkit.click();

      expect(enzymeNotificationTestkit.visible()).toBeTruthy();
    });
  });
});
