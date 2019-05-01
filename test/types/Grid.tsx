import * as React from 'react';
import {Container, Row, Col, AutoAdjustedRow} from '../../src/Grid';

function GridBaseExample() {
  return (
    <div style={{background: '#F0F4F7'}}>
      <Container>
        <Row>
          <Col>{text('<Col/>')}</Col>
        </Row>
        <Row>
          <Col span={6}>{text('<Col span={6}/>')}</Col>
          <Col span={6}>{text('<Col span={6}/>')}</Col>
        </Row>
        <Row>
          <Col span={8}>{text('<Col span={8}/>')}</Col>
          <Col span={4}>{text('<Col span={4}/>')}</Col>
        </Row>
        <Row>
          <Col span={6}>{text('<Col span={6}/>')}</Col>
          <Col span={3}>{text('<Col span={3}/>')}</Col>
          <Col span={3}>{text('<Col span={3}/>')}</Col>
        </Row>
      </Container>
    </div>
  );

  function text(children) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,.1)',
          width: '100%',
          height: '50px'
        }}
        children={children}
      />
    );
  }
}

function GridWithEqualColumnHeight() {
  function field() {
    return <span />;
  }

  return (
    <div style={{background: '#F0F4F7', padding: 30}}>
      <Container>
        <Row stretchViewsVertically>
          <Col span={8}>
            <Row>
              <Col span={4}>{field()}</Col>
              <Col span={4}>{field()}</Col>
              <Col span={4}>{field()}</Col>
            </Row>
            <Row>
              <Col span={6}>{field()}</Col>
            </Row>
            <Row>
              <Col span={6}>{field()}</Col>
              <Col span={6}>{field()}</Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              <Col>{field()}</Col>
            </Row>
            <Row>
              <Col>{field()}</Col>
            </Row>
            <Row>
              <Col>{field()}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function GridWithAutoAdjustedColumns() {
  return (
    <div style={{background: '#F0F4F7', padding: 30}}>
      <Container>
        <AutoAdjustedRow>
          Here comes some AMAZING content that will blow your mind. Or just show
          you that the card next to me got my height.
        </AutoAdjustedRow>

        <AutoAdjustedRow />
      </Container>
    </div>
  );
}
