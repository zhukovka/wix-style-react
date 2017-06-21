import React from 'react';
import PropTypes from 'prop-types';
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
        <label className={styles.label} htmlFor="file_input_id">
          <div className={styles.icon}><Add width="42" height="42"/></div>
          <div>
            <span className={styles.cta} data-hook="main-label">{mainLabel}</span>
            <span className={styles.info} data-hook="sub-label">{this.state.selectedFileName}</span>
            {error && <span data-hook="filePicker-error" className={styles.error}>{errorMessage}</span>}
          </div>
        </label>
        <input id="file_input_id" className={styles.input} type="file" accept={supportedFormats} onChange={e => this.onChooseFile(e.target.files[0])}/>
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
