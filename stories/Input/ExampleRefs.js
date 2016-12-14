import React from 'react';
import Input from 'wix-style-react/Input';

class CommandsExample extends React.Component {
  render() {
    const handleClick1 = () => this.refs.inputtest.focus();

    const handleClick2 = () => {
      this.refs.inputtest.focus();
      setTimeout(() => this.refs.inputtest.blur(), 1000);
    };

    const handleClick3 = () => {
      this.refs.inputtest.focus();
      this.refs.inputtest.select();
    };

    return (
      <div>
        <div style={{width: '400px'}}>
          <Input ref="inputtest"/>
        </div>
        <button onClick={handleClick1}>Focus</button>
        <button onClick={handleClick2}>Focus &amp; blur 1 second later</button>
        <button onClick={handleClick3}>Select text</button>
      </div>
    );
  }
}

export default () =>
  <div>
    <CommandsExample/>
  </div>;
