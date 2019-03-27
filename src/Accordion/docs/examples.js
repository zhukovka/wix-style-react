export const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

export const simple = `
<Accordion
  items={[
    { title: 'First Row', children: <Text>${text}</Text> },
    { title: 'Second Row', children: <Text>${text}</Text> },
  ]}
/>
`;

export const withButton = `
<Accordion
  items={[
    {
      title: 'First Row With Button',
      children: <Text>${text}</Text>,
      buttonType: 'button',
      expandLabel: 'Show More',
      collapseLabel: 'Less' ,
    },
    {
      title: 'Second Row With Icon',
      children: <Text>${text}</Text>,
      icon: <InfoCircle />,
      expandLabel: 'Show More',
      collapseLabel: 'Less',
    },
  ]}
/>
`;

export const multiple = `
<Accordion
  multiple
  items={[
    { title: 'First Initially Open Row', children: <Text>${text}</Text>, open: true, collapseLabel: 'Less' },
    { title: 'Second Row', children: <Text>${text}</Text>, collapseLabel: 'Less' },
    { title: 'Third Row', children: <Text>${text}</Text>, collapseLabel: 'Less' },
  ]}
/>
`;

export const disabled = `
<Accordion
  items={[
    { title: 'Disabled Row', children: <Text>${text}</Text>, disabled: true },
    { title: 'Second Row', children: <Text>${text}</Text> },
  ]}
/>
`;

export const inCard = `
<Card>
  <Card.Header title="Card with Accordion"/>
  <Accordion
    items={
      [
        {
          title: 'First Item',
          icon: <InfoCircle />,
          expandLabel: 'More',
          collapseLabel: 'Less',
          buttonType: 'button',
          children: (
            <Text>
              ${text}
            </Text>
          ),
        }
      ]
    }
    />
</Card>
`;
