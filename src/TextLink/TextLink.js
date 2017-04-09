import React, {PropTypes} from 'react';
import WixComponent from '../../src/WixComponent';
import TextLinkLayout from '../../src/TextLinkLayout';

export default class TextLink extends WixComponent {

  static propTypes = Object.assign({},
    TextLinkLayout.propTypes,
    {
      link: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      download: PropTypes.bool,
      rel: PropTypes.string,
      target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top', 'framename']),
      ariaLabel: PropTypes.string
    }
  );

  static defaultProps = Object.assign({},
    TextLinkLayout.defaultProps, {
      disabled: false,
      download: false,
      rel: null,
      target: null
    }
  );

  render() {
    const {ariaLabel, disabled, link, children, download, rel, target} = this.props;

    const props = {
      download,
      href: `${link}`,
      onClick: event => disabled && event.preventDefault(),
      role: 'link',
      style: {
        textDecoration: 'inherit',
        color: 'inherit',
        tabIndex: 0
      }
    };

    if (ariaLabel) {
      props['aria-label'] = ariaLabel;
    }

    if (rel) {
      props.rel = rel;
    }

    if (target) {
      props.target = target;
    }

    return (
      <TextLinkLayout {...this.props}>
        <a {...props}>
          {children}
        </a>
      </TextLinkLayout>
    );
  }
}
