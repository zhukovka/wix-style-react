import React, {PropTypes} from 'react';
import WixComponent from '../../src/WixComponent';
import TextLinkLayout from '../../src/TextLinkLayout';

export default class TextLink extends WixComponent {

  static propTypes = Object.assign({},
    TextLinkLayout.propTypes,
    {
      link: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    }
  );

  static defaultProps = Object.assign({},
    TextLinkLayout.defaultProps,
    {
      disabled: false
    }
  );

  render() {
    const {disabled, link, children} = this.props;

    return (
      <TextLinkLayout {...this.props}>
        <a
          href={`${link}`}
          onClick={event => disabled && event.preventDefault()}
          style={{
            textDecoration: 'inherit',
            color: 'inherit',
            outline: 'inherit',
            border: 'inherit',
          }}
          >
          {children}
        </a>
      </TextLinkLayout>
    );
  }
}
