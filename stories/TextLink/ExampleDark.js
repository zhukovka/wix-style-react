import React, {Component} from 'react';
import TextLink from 'wix-style-react/TextLink';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '340px',
  backgroundColor: '#172D3C',
  lineHeight: '22px'
};

class ControlledExample extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div style={style}>
        <TextLink darkBackground link="http://www.wix.com">Wix link</TextLink>
        <br/>
        <TextLink darkBackground forceUnderline link="http://www.wix.com">Wix link underline</TextLink>
        <br/>
        <TextLink darkBackground size='small' link="http://www.wix.com">Wix link small</TextLink>
      </div>


    );
  }
}

export default () =>
  <ControlledExample/>;
