import React from 'react';
import {DatePicker} from '../../src/index.js';

class ControlledDatePicker extends React.Component {

    constructor(params) {
        super(params);

        this.state = {
            value: null
        };
    }

    render() {
        return (
            <DatePicker
                value={this.state.value}
                onChange={value => this.setState({value})}
                dateFormat="DD/MM/YYYY"
            />
        );
    }
}

export default ControlledDatePicker;
