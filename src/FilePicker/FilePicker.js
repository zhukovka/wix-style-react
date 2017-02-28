import React, {PropTypes} from 'react';
import styles from './FilePicker.scss';
import WixComponent from '../WixComponent';
import Add from '../svg/Add/Add';

class FilePicker extends WixComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasFile: false,
      selectedFileName: props.subLabel
    };
  }

  onChooseFile(file) {
    if (file) {
      const {onChange} = this.props;
      onChange(file);

      this.setState({
        hasFile: true,
        selectedFileName: file.name
      });
    }
  }

  render() {
    const {header, mainLabel} = this.props;

    return (
      <div>
        {header && (<span className={styles.header}>{header}</span>)}
        <label className={styles.label}>
          <Add/>
          <div>
            <span className={styles.cta}>{mainLabel}</span>
            <span className={styles.info}>{this.state.selectedFileName}</span>
          </div>
          <input className={styles.input} type="file" onChange={e => this.onChooseFile(e.target.files[0])}/>
        </label>
      </div>
    );
  }
}

FilePicker.defaultProps = {
  mainLabel: 'Choose File',
  subLabel: 'No file chosen (Max size 5 MB)',
  onChange: () => {}
};

FilePicker.propTypes = {
  header: PropTypes.string,
  onChange: PropTypes.func,
  mainLabel: PropTypes.string,
  subLabel: PropTypes.string
};

export default FilePicker;
