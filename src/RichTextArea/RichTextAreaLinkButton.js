import React, {Component, PropTypes} from 'react';
import Tooltip from '../Tooltip';
import RichTextAreaLinkForm from './RichTextAreaLinkForm';
import RichTextAreaButton from './RichTextAreaButton';

class RichTextAreaLinkButton extends Component {
  state = {
    isFormVisible: false,
  };

  toggleForm = () => {
    this.state.isFormVisible ?
      this.hideForm() :
      this.showForm();
  };

  showForm = () => {
    this.setState({isFormVisible: true});
  };

  hideForm = () => {
    this.setState({isFormVisible: false});
  };

  getTooltipContent = () => <RichTextAreaLinkForm onCancel={this.hideForm}/>;

  render() {
    const {isFormVisible} = this.state;
    const {isActive, onClick} = this.props;

    return (
      <Tooltip
        content={this.getTooltipContent()}
        overlay=""
        alignment="center"
        placement="bottom"
        showTrigger="custom"
        hideTrigger="custom"
        hideDelay={0}
        moveBy={{x: 2, y: 0}}
        active={isFormVisible}
        onClickOutside={this.hideForm}
        >
        <RichTextAreaButton
          disabled={this.props.disabled}
          onClick={isActive ? onClick : this.toggleForm}
          type="link"
          isActive={isActive}
          isTooltipDisabled={isFormVisible}
          />
      </Tooltip>
    );
  }
}

RichTextAreaLinkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default RichTextAreaLinkButton;
