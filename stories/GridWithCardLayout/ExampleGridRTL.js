import React from 'react';
import {Container, Row, Col, Card} from '../../src/Grid'
import styles from './ExampleGrid.scss'

import TextField from '../../src/TextField';
import Input from '../../src/Input';
import Label from '../../src/Label';

function renderStandardInput() {
  return (
    <TextField>
      <Label
        for="textField"
      >
        Text Field
      </Label>
      <Input
        id="textField"
        placeholder="Default text goes"
      />
    </TextField>
  );
}

export default () =>
  <div data-hook="card-example" className={styles.exampleContainer}>
    <Container>
      <Row>
        <Card>
            <Card.Header title='Grid Row - RTL support'>
                Row RTL support
            </Card.Header>
            <Card.Content>
                <Row rtl>
                    <Col span={4}>
                        אחת
                    </Col>
                    <Col span={4}>
                        שתיים
                    </Col>
                    <Col span={4}>
                        שלוש
                    </Col>
                </Row>
            </Card.Content>
        </Card>
      </Row>
    </Container>
  </div>;
