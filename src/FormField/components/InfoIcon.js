import React from 'react';
import PropTypes from 'prop-types';

import InfoCircle from 'wix-ui-icons-common/InfoCircle';

import Tooltip from '../../Tooltip';
import styles from '../FormField.scss';

const InfoIcon = ({tooltipProps}) => (
  <div className={styles.infoIcon} data-hook="formfield-infoicon">
    <Tooltip
      dataHook="formfield-infotooltip"
      theme="dark"
      {...tooltipProps}
      >
      <div>
        <InfoCircle size="24px"/>
      </div>
    </Tooltip>
  </div>
);

InfoIcon.propTypes = {
  tooltipProps: PropTypes.shape(Tooltip.propTypes)
};

export default InfoIcon;
