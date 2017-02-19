import React, {Component} from 'react';
import TextLink from 'wix-style-react/TextLink';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '340px',
  lineHeight: '22px'
};

class ControlledExample extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div style={style}>
        <TextLink link="http://www.wix.com">Wix link</TextLink>
        <br/>
        <TextLink forceUnderline link="http://www.wix.com">Wix link underline</TextLink>
        <br/>
        <TextLink size='small' link="http://www.wix.com">Wix link small</TextLink>
      </div>


    );
  }
}

export default () =>
  <ControlledExample/>;
