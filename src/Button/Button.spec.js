import React from 'react';

import { SpyOnHelper, render, cleanup } from '../../test/utils/unit';
import { depLogger } from '../utils/deprecationLog';
import Button from '.';

describe('Button', () => {
  afterEach(() => cleanup());

  it('should have correct displayName', async () => {
    expect(Button.displayName).toEqual('Button');
  });

  describe('deprecationLog', () => {
    const depLogSpyHelper = new SpyOnHelper(
      depLogger,
      'log',
    ).beforeAndAfterEach();

    it('should have deprecationLog', () => {
      render(<Button />);
      expect(depLogSpyHelper.spy).toHaveBeenCalledTimes(1);
    });

    it('should NOT deprecationLog', () => {
      render(<Button upgrade />);
      expect(depLogSpyHelper.spy).toHaveBeenCalledTimes(0);
    });
  });
});
