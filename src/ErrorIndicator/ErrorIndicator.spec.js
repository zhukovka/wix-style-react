import React from 'react';
import { createRendererWithUniDriver } from '../../test/utils/react';

import ErrorIndicator from './ErrorIndicator';
import { errorIndicatorDriverFactory } from './ErrorIndicator.uni.driver';

describe('ErrorIndicator', () => {
  const render = createRendererWithUniDriver(errorIndicatorDriverFactory);

  it('should render a tooltip with the error message', async () => {
    const errorMessage = 'Some error';

    const { driver } = render(<ErrorIndicator errorMessage={errorMessage} />);

    expect(await driver.getErrorMessage()).toEqual(errorMessage);
  });
});
