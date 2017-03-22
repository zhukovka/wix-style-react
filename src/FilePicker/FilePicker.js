import React, {PropTypes} from 'react';
import styles from './FilePicker.scss';
import WixComponent from '../WixComponent';
import {Add} from '../Icons/dist';

class FilePicker extends WixComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileName: props.subLabel
    };
  }

  onChooseFile(file) {
    const {maxSize, onChange} = this.props;

    if (file) {
      onChange(file);
      if (file.size <= maxSize) {
        this.setState({selectedFileName: file.name});
      }
    }
  }

  render() {
    const {header, mainLabel, supportedFormats, error, errorMessage} = this.props;

    return (
      <div>
        {header && (<span className={styles.header}>{header}</span>)}
        <label className={styles.label}>
          <div className={styles.icon}><Add width="42" height="42"/></div>
          <div className={styles.flex}>
            <span className={styles.cta}>{mainLabel}</span>
            <span className={styles.info}>{this.state.selectedFileName}</span>
            {error && <span className={styles.error}>{errorMessage}</span>}
          </div>
          <input className={styles.input} type="file" accept={supportedFormats} onChange={e => this.onChooseFile(e.target.files[0])}/>
        </label>
      </div>
    );
  }
}

FilePicker.defaultProps = {
  mainLabel: 'Choose File',
  subLabel: 'No file chosen (Max size 5 MB)',
  onChange: () => {},
  supportedFormats: '*',
  errorMessage: '',
  maxSize: 5000000  //5MB
};

FilePicker.propTypes = {
  header: PropTypes.string,
  onChange: PropTypes.func,
  mainLabel: PropTypes.string,
  subLabel: PropTypes.string,
  supportedFormats: PropTypes.string,
  maxSize: PropTypes.number,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default FilePicker;
