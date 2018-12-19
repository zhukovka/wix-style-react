import React from 'react';

import { render, cleanup } from '../../test/utils/unit';
import { depLogger } from '../utils/deprecationLog';
import Button from '.';

describe('Button', () => {
  afterEach(() => cleanup());

  it('should have correct displayName', async () => {
    expect(Button.displayName).toEqual('Button');
  });

  describe('deprecationLog', () => {
    let depLogSpy;

    beforeEach(() => {
      depLogSpy = jest.spyOn(depLogger, 'log');
    });

    afterEach(() => depLogSpy.mockRestore());

    it('should have deprecationLog', () => {
      render(<Button />);
      expect(depLogSpy).toHaveBeenCalledTimes(1);
    });

    it('should NOT deprecationLog', () => {
      render(<Button upgrade />);
      expect(depLogSpy).toHaveBeenCalledTimes(0);
    });
  });
});
