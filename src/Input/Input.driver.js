import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';
import styles from './Input.scss';

export default class InputDriver {

  given = {
    props: props => {
      this.props = props;
      return this;
    }
  };

  when = {
    created: () => {
      this.wrapper = shallow(
        <Input {...this.props}/>);
      return this;
    },
    triggered: (trigger, event) => {
      this.wrapper.find('input').simulate(trigger, event);
      return this;
    },
  };

  get = {
    element: () => this.wrapper,
    input: () => this.wrapper.find('input'),
    value: () => this.wrapper.find('input').props().value,
    defaultValue: () => this.wrapper.find('input').props().defaultValue,
    tabIndex: () => this.wrapper.find('input').props().tabIndex,
    exclamation: () => this.wrapper.find('Exclamation'),
    unit: () => this.wrapper.find(`.${styles.unit}`),
    magnifyingGlass: () => this.wrapper.find(`.${styles.magnifying_glass}`)
  }

  constructor() {
    this.props = {};
  }
}
