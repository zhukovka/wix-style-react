import React, {Children} from 'react';
import WixComponent from '../../WixComponent';
import styles from './RangeInputWithLabelComposite.scss';

class RangeInputWithLabelComposite extends WixComponent {
  _doKeyDown(e) {
    const keys = {
      upArrow: 38,
      downArrow: 40
    };
    if (e.keyCode === keys.upArrow && !isNaN(e.target.value)) {
      e.preventDefault();
      e.target.value++;
    }
    if (e.keyCode === keys.downArrow && !isNaN(e.target.value)) {
      e.preventDefault();
      e.target.value--;
    }
  }

  render() {
    const children = Children.toArray(this.props.children);
    const label = children.length === 3 ? children[0] : null;
    const firstInput = children.length === 3 ? children[1] : children[0];
    const lastInput = children.length === 3 ? children[2] : children[1];
    const moreFirstInputProps = {
      noRightBorderRadius: styles.firstinput,
      onKeyDown: e => this._doKeyDown(e)
    };
    const moreLastInputProps = {
      noLeftBorderRadius: styles.lastinput,
      onKeyDown: e => this._doKeyDown(e)
    };
    return (<div className={styles.wrapper}>
      { label ?
        <div className={styles.label}>
          {label}
        </div> : null
      }
      <div className={styles.inputs}>
        { React.cloneElement(firstInput, moreFirstInputProps)}
        { React.cloneElement(lastInput, moreLastInputProps)}
      </div>
    </div>);
  }
}

RangeInputWithLabelComposite.propTypes = {
  children: React.PropTypes.any
};

RangeInputWithLabelComposite.displayName = 'RangeInputWithLabelComposite';

export default RangeInputWithLabelComposite;
