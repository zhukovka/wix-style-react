import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import GoogleAddressInputWithLabel from './GoogleAddressInputWithLabel';
import GoogleAddressInput from '../GoogleAddressInput';
import { GmapsTestClient } from '../GoogleAddressInput/GoogleAddressInput.spec';
import { googleAddressInputWithLabelTestkitFactory } from '../../testkit';
import { googleAddressInputWithLabelTestkitFactory as enzymeGoogleAddressInputWithLabelTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

const props = {
  Client: GmapsTestClient,
};

describe('GoogleAddressInputWithLabel', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <GoogleAddressInputWithLabel dataHook={dataHook}>
              <GoogleAddressInput {...props} />
            </GoogleAddressInputWithLabel>
          </div>,
        ),
      );
      const googleAddressInputWithLabelTestkit = googleAddressInputWithLabelTestkitFactory(
        {
          wrapper,
          dataHook,
        },
      );
      expect(googleAddressInputWithLabelTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(
          <GoogleAddressInputWithLabel dataHook={dataHook}>
            <GoogleAddressInput {...props} />
          </GoogleAddressInputWithLabel>,
        );
        const googleAddressInputWithLabelTestkit = enzymeGoogleAddressInputWithLabelTestkitFactory(
          {
            wrapper,
            dataHook,
          },
        );
        expect(googleAddressInputWithLabelTestkit.exists()).toBeTruthy();
      });
    });
  });
});
