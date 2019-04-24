import React from 'react';

import Card from 'wix-style-react/Card';
import Input from 'wix-style-react/Input';
import Button from 'wix-style-react/Button';
import FormField from 'wix-style-react/FormField';

export default () => (
  <div
    data-hook="card-example-basic"
    style={{ background: '#F0F4F7', padding: 30 }}
  >
    <Card>
      <Card.Header title="Simple Card" withoutDivider />
      <Card.Subheader
        title="Card Subheader"
        suffix={
          <Button
            onClick={() => alert('Clicked')}
            size="small"
            theme="fullblue"
          >
            Click Me!
          </Button>
        }
      />
      <Card.Content>
        <FormField label="Type your joke below">
          <Input />
        </FormField>
      </Card.Content>

      <Card.Divider />

      <Card.Content>
        <FormField label="Type your tragedy below">
          <Input />
        </FormField>
      </Card.Content>
    </Card>
  </div>
);
