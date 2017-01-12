import React, {PropTypes} from 'react';
import s from './ButtonSelection.scss';

class ButtonSelection extends React.Component {
  componentWillMount() {
    const {value, buttonsNames} = this.props;
    if (value && (buttonsNames.every(b => b !== value))) {
      throw new Error('ButtonSelection: Invalid button selected');
    }
  }

  render() {
    const {value, buttonsNames, onChange, id} = this.props;
    return (
      <div id={id} className={s.buttonsComplex}>
        {
          buttonsNames.map(buttonName =>
            <span
              key={buttonName}
              className={value === buttonName ? s.selected : s.unselected}
              onClick={() => {
                if (buttonName !== value) {
                  onChange(buttonName);
                }
              }}
              >
              {buttonName}
            </span>
          )
        }
      </div>
    );
  }
}

ButtonSelection.propTypes = {
  buttonsNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.string
};

ButtonSelection.displayName = 'ButtonSelection';

export default ButtonSelection;
