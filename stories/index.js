import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import './stories.css';
import Button from './Button';
import Modal from './Modal';
import Slider from './Slider';
import GoogleAddressInput from './GoogleAddressInput';
import MessageBox from './MessageBox';

storiesOf('Components', module)
  .add('Button', () => (
    <Button />
  ))
  .add('Modal', () => (
      <Modal />
  ))
  .add('Slider', () => (
      <Slider />
  ))
  .add('GoogleAddressInput', () => (
      <GoogleAddressInput />
  ))
   .add('MessageBox', () => (
      <MessageBox />
  ));
