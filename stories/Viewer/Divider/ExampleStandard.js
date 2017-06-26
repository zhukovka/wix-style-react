import React from 'react';
import {Container, Row, Col} from '../../../src/Grid';
import {Divider} from 'wix-style-react/Viewer';

class DividerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showComponents: true};
  }

  render() {
    return (
      <div style={{height: '250px'}}>
        <Container>
          <Row>
            <Col span={4}>
              <div style={{height: '30px'}}>Default (Horizontal) Divider</div>
              <Divider />
            </Col>
            <Col span={4}>
              <div style={{height: '30px'}}>
                Divider with size, length, color, opacity parameters
              </div>
              <Divider size={5} color='#B1DDf8' length='200px' opacity={80} />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <div style={{height: '30px'}}>
                Vertical Divider
              </div>
              <Divider direction='vertical'/>
            </Col>
            <Col span={4}>
              <div style={{height: '30px'}}>
                Vertical divider with size, length, color, opacity parameters
              </div>
              <Divider direction='vertical' color='FFDDf8' length='200px' opacity={100} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default () =>
  <DividerExample/>
