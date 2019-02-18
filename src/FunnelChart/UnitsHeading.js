import React from 'react';
import { number, string, bool } from 'prop-types';
import Heading from '../Heading';

import { formatValueToUnitString, Units } from '../utils/numberFormatters';

const UnitsHeading = ({
  value,
  unit = Units.COUNT,
  currency,
  tooltip = true,
  precision = 0,
  ...headingProps,
}) => {
  if (!value) {
    return null;
  }

  const formattedValue = formatValueToUnitString(
    value,
    unit,
    currency,
    precision,
  );

  return (
    <Heading {...headingProps} ellipsis>
      {formattedValue}
    </Heading>
  );
};

UnitsHeading.propTypes = {
  value: number,
  unit: string,
  currency: string,
  tooltip: bool,
  precision: number,
}

export default UnitsHeading;
