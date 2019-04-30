import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InfoCircle from 'wix-ui-icons-common/InfoCircle';
import Tooltip from '../../Tooltip';

import styles from './InfoIcon.st.css';

const InfoIcon = ({ dataHook, tooltipProps, className }) => (
  <div className={cx(styles.color, className)}>
    <Tooltip
      upgrade
      flip={false}
      appendTo="window"
      enterDelay={0}
      {...tooltipProps}
      dataHook={dataHook}
    >
      <InfoCircle size="24px" />
    </Tooltip>
  </div>
);

InfoIcon.displayName = 'InfoIcon';

InfoIcon.propTypes = {
  tooltipProps: PropTypes.shape(Tooltip.propTypes),
  dataHook: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InfoIcon;
