import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Tooltip from 'wix-style-react/Tooltip';
import Button from 'wix-style-react/Button';
import {Dots} from '../../../src/Icons/dist';

export class Template extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    theme: Tooltip.propTypes.theme,
    placement: Tooltip.propTypes.placement,
    tooltipContent: Tooltip.propTypes.content,
    showTrigger: Tooltip.propTypes.showTrigger,
    hideTrigger: Tooltip.propTypes.hideTrigger,
    type: PropTypes.oneOf(['tooltip', 'popover', 'popoverMenu']),
    size: Tooltip.propTypes.size
  };

  componentDidUpdate(props) {
    props.onChange(getExampleCode(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(getExampleCode(this.getComponent()));
  }

  getComponent() {
    return (
      <Tooltip
        placement={this.props.placement}
        alignment="center"
        content={this.props.tooltipContent}
        showTrigger={this.props.showTrigger}
        hideTrigger={this.props.hideTrigger}
        theme={this.props.theme}
        size={this.props.size}
        shouldCloseOnClickOutside
        >
        {this.getTooltipTarget()}
      </Tooltip>
    );
  }

  getTooltipTarget() {
    switch (this.props.type) {
      case 'tooltip':
        return (
          <div>Hover me to see the tooltip</div>
        );
      case 'popover':
        return (
          <Button type="button">Click Me</Button>
        );
      case 'popoverMenu':
        return (
          <Button
            type="button"
            height="medium"
            theme="icon-greybackground"
            >
            <Dots size="12px"/>
          </Button>
        );
      default:
    }
  }

  render() {
    return this.getComponent();
  }
}

function getExampleCode(element) {
  return reactElementToJSXString(element, {
    filterProps: ['onChange'],
    showDefaultProps: false,
  });
}

export default Template;

