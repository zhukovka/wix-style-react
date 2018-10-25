import React from 'react';
import CalendarPanel from '../../src/CalendarPanel';
import CodeExample from 'wix-storybook-utils/CodeExample';

import {Container, Row, Col} from 'wix-style-react/Grid';

import {CalendarPanelExample} from './CalendarPanelExample';
import CalendarPanelExampleRaw from '!raw-loader!./CalendarPanelExample';

import {CalendarPanelCustomExample} from './CalendarPanelCustomExample';
import CalendarPanelCustomExampleRaw from '!raw-loader!./CalendarPanelCustomExample';


export default {
  category: 'Components',
  storyName: 'CalendarPanel',

  component: CalendarPanel,
  componentPath: '../../src/CalendarPanel',

  componentProps: {
    dataHook: 'calendar'
  },

  examples: (
    <Container>
      <Row>
        <Col span={12}>
          <div style={{backgroundColor: '#F0F4F7', padding: '30px'}}>
            <CodeExample title="CalendarPanel (default)" code={CalendarPanelExampleRaw}>
              <CalendarPanelExample/>
            </CodeExample>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={{backgroundColor: '#F0F4F7', padding: '30px'}}>
            <CodeExample title="CalendarPanel (Custom)" code={CalendarPanelCustomExampleRaw}>
              <CalendarPanelCustomExample/>
            </CodeExample>
          </div>
        </Col>
      </Row>
    </Container>
  )
};
