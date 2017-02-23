import React, {PropTypes} from 'react';
import WixComponent from '../WixComponent';
import RichTextAreaButton from './RichTextAreaButton';
import styles from './RichTextAreaToolbar.scss';

class RichTextAreaToolbar extends WixComponent {
  render() {
    const {onClick} = this.props;
    return (
      <div className={styles.container}>
        <RichTextAreaButton onClick={() => onClick('mark', 'bold')} type="bold"/>
        <RichTextAreaButton onClick={() => onClick('mark', 'italic')} type="italic"/>
        <RichTextAreaButton onClick={() => onClick('mark', 'underline')} type="underline"/>
        <RichTextAreaButton onClick={() => onClick('block', 'unordered-list')} type="unordered-list"/>
        <RichTextAreaButton onClick={() => onClick('block', 'ordered-list')} type="ordered-list"/>
      </div>
    );
  }
}

RichTextAreaToolbar.propTypes = {
  onClick: PropTypes.func,
};

export default RichTextAreaToolbar;
