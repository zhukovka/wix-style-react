import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import './stories.css';
import Button from './Button';
import Input from './Input';
import AutoCompleteInput from './AutoCompleteInput';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import ToggleSwitch from './ToggleSwitch';
import Select from './Select';
import Modal from './Modal';
import Slider from './Slider';
import GoogleAddressInput from './GoogleAddressInput';

storiesOf('Components', module)
  .add('Button', () => (
    <Button />
  ))
  .add('Input', () => (
      <Input />
  ))
  .add('AutoCompleteInput', () => (
      <AutoCompleteInput />
  ))
  .add('Checkbox', () => (
      <Checkbox />
  ))
  .add('RadioGroup', () => (
      <RadioGroup />
  ))
  .add('ToggleSwitch', () => (
      <ToggleSwitch />
  ))
  .add('Select', () => (
      <Select />
  ))
  .add('Modal', () => (
      <Modal />
  ))
  .add('Slider', () => (
      <Slider />
  ))
  .add('GoogleAddressInput', () => (
      <GoogleAddressInput />
  ));
