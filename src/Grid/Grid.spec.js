/**
 * Created by lioru on 05/05/2017.
 */
import React from 'react';
import {mount} from 'enzyme';
import {Col, Row} from './Grid';
import classNames from 'classnames';

describe('Grid', () => {

  describe('breakpoints col options', () => {
    it('should add col xs class when using span attribute ', () => {
      const element = mount(<Col span="6"/>);
      expect(element.hasClass('colXs6')).toEqual(true);
    });

    it('should add col sm class when using sm attribute ', () => {
      const element = mount(<Col sm="3"/>);
      expect(element.hasClass('colSm3')).toEqual(true);
    });

    it('should add col md class when using md attribute ', () => {
      const element = mount(<Col md="12"/>);
      expect(element.hasClass('colMd12')).toEqual(true);
    });

    it('should add col lg class when using lg attribute ', () => {
      const element = mount(<Col lg="1"/>);
      expect(element.hasClass('colLg1')).toEqual(true);
    });

    it('should add col xl class when using xl attribute ', () => {
      const element = mount(<Col xl="5"/>);
      expect(element.hasClass('colXl5')).toEqual(true);
    });

    it('should add col xl class when using xl attribute ', () => {
      const element = mount(<Col sm="3" md="12" lg="1" xl="5"/>);
      expect(element.hasClass('colXl5')).toEqual(true);
      expect(element.hasClass('colLg1')).toEqual(true);
      expect(element.hasClass('colMd12')).toEqual(true);
      expect(element.hasClass('colSm3')).toEqual(true);
    });
  });

  describe('breakpoints hide options', () => {
    it('should add hidden xs class when using hiddenxs attribute ', () => {
      const element = mount(<Col hiddenXs="up"/>);
      expect(element.hasClass('hiddenXsUp')).toEqual(true);
    });

    it('should add hidden sm class when using hiddensm attribute ', () => {
      const element = mount(<Col hiddenSm="down"/>);
      expect(element.hasClass('hiddenSmDown')).toEqual(true);
    });

    it('should add hidden md class when using hiddenmd attribute ', () => {
      const element = mount(<Col hiddenMd="up"/>);
      expect(element.hasClass('hiddenMdUp')).toEqual(true);
    });

    it('should add hidden lg class when using hiddenlg attribute ', () => {
      const element = mount(<Col hiddenLg="Down"/>);
      expect(element.hasClass('hiddenLgDown')).toEqual(true);
    });

    it('should add hidden xl class when using hiddenxl attribute ', () => {
      const element = mount(<Col hiddenXl="up"/>);
      expect(element.hasClass('hiddenXlUp')).toEqual(true);
    });
  });

  describe('pass className', () => {

    it('should pass className to col element', () => {
      const element = mount(<Col className="test"/>);
      expect(element.hasClass('test')).toEqual(true);
    });

    it('should pass className to row element', () => {
      const element = mount(<Row className="test"/>);
      expect(element.hasClass('test')).toEqual(true);
    });

    it('should pass multiple className to col element', () => {
      const element = mount(<Col className={classNames('test1', 'test2')}/>);
      expect(element.hasClass('test1')).toEqual(true);
      expect(element.hasClass('test2')).toEqual(true);
    });

    it('should pass className to row element', () => {
      const element = mount(<Row className={classNames('test1', 'test2')}/>);
      expect(element.hasClass('test1')).toEqual(true);
      expect(element.hasClass('test2')).toEqual(true);
    });

  });
});

