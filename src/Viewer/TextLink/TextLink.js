import React, {PropTypes} from 'react';
import WixComponent from '../../BaseComponents/WixComponent';
import {BaseTextLink} from '../../BaseComponents';
import color from 'color';

export default class TextLink extends WixComponent {

  static propTypes = Object.assign({},
  BaseTextLink.propTypes,
    {
      link: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      download: PropTypes.bool,
      rel: PropTypes.string,
      target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top', 'framename']),
      ariaLabel: PropTypes.string,
      color: PropTypes.string,
      hover: PropTypes.string
    }
  );

  static defaultProps = Object.assign({},
  BaseTextLink.defaultProps, {
    disabled: false,
    download: false,
    rel: null,
    target: null,
    color: '#18D2DE'
  });

  render() {
    const darkerHoverColor = color(this.props.color).darken(0.2);

    return (
      <BaseTextLink
        onMouseEnter={event => {
          if (this.props.hover) {
            event.target.style.color = this.props.hover;
          } else {
            event.target.style.color = darkerHoverColor;
          }
        }}
        onMouseLeave={event => event.target.style.color = this.props.color ? this.props.color : 'inherit'}
        {...this.props}
        />
    );
  }
}
