import React from 'react';
import PropTypes from 'prop-types';

import {Toolbar, ItemGroup, Item} from '../TableToolbar/Toolbar';
import Button from '../Button';

import style from './CalendarPanel.st.css';

export const CalendarPanelFooter = props => {
  const {selectedDaysDisplay, selectedDays, onCancel, onSubmit} = props;
  return (
    <Toolbar className={style.footer}>
      <ItemGroup>
        <Item>
          <Text>
            {typeof props.selectedDaysDisplay === 'string'? : props}
          </Text>
        </Item>
      </ItemGroup>
      <ItemGroup>
        <Item layout="button">
          <Button onClick={onCancel}>
              Cancel
          </Button>
        </Item>
        <Item layout="button">
          <Button onClick={onSubmit}>
              Update
          </Button>
        </Item>
      </ItemGroup>
    </Toolbar>
  );
};

CalendarPanelFooter.propTypes = {
  /* A single Date or a range {from: Date, to:Date}. When passing this prop the Component is controlled.*/
  selectedDaysDisplay: PropTypes.node,
  selectionMode: PropTypes.oneOf('single-day', 'single-range').isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CalendarPanel;
