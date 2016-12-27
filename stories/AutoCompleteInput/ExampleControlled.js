import React, {Component, PropTypes} from 'react';
import AutoCompleteInput from 'wix-style-react/AutoCompleteInput';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const suggestions = [
  {text: 'First suggestion'},
  {text: 'Second suggestion'},
  {text: 'Third suggestion'},
  {node: <span style={{color: 'red'}}>Node suggestion</span>, text: 'Text of node suggestion'},
  {text: 'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

class ControlledAutoCompleteInput extends Component {
  static propTypes = {
    value: PropTypes.string
  };

  constructor({value}) {
    super();
    this.state = {value};
  }

  render() {
    const onChange = event => this.setState({value: event.target.value});
    const onSet = value => this.setState({value: value.text});
    const predicate = element =>
      this.state.value ?
      element.text.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 :
      true;

    return (
      <AutoCompleteInput {...this.props} suggestions={suggestions.filter(predicate)} value={this.state.value} onChange={onChange} onSet={onSet}/>
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledAutoCompleteInput/>
  </div>;
