import * as React from 'react';
import Card from '../../src/Card';

function CardPanelFooterWithMandatoryProps() {
  return (
    <Card
    />
  );
}

function CardPanelFooterWithAllProps() {
  return (
    <Card
    dataHook="hook"
    hideOverflow
    stretchVertically
    >
      <Card.Header title="title" dataHook="hook" subtitle="sub" suffix={<span/>} />
      <Card.Divider />
      <Card.Content>
        asdassd
      </Card.Content>
    </Card>
  );
}
