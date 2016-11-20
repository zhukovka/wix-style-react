import _ from 'lodash';
import React, {Component} from 'react';
import Rcslider from 'rc-slider';
import SliderHandle from './SliderHandle';
import 'rc-slider/assets/index.css';
import './Slider.scss2';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    getRange() {
        const {min, max, step} = this.props;
        let range = [];

        for (let i = min; i <= max; i += step) {
            range.push(i);
        }

        return range;
    }

    renderLabel(value) {
        const {min, max} = this.props;

        return (
            <div className='mark'>
                <div className='mark-line'/>
                <div className='mark-value'>
                    {(value === min || value === max) && (
                        <div>{value}</div>
                    )}
                </div>
            </div>
        );
    }

    getMarks() {
        return _.reduce(this.getRange(), (acc, cur) => {
            acc[cur] = {
                label: this.renderLabel(cur)
            };

            return acc;
        }, {});
    }

    render() {
        return (
            <div className='wix-slider'>
                <Rcslider
                    handle={<SliderHandle/>}
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    marks={this.getMarks()}
                    range={true}
                    step={this.props.step}
                    onChange={this.props.onChange}
                    onAfterChange={this.handleAfterChange}
                />
            </div>
        );
    }
}

const {PropTypes} = React;

Slider.propTypes = {
    value: PropTypes.arrayOf(PropTypes.number),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

Slider.defaultProps = {
    min: 1,
    max: 20,
    step: 1,
    value: [2, 7]
};
