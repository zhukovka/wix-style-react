export const textTitle = `
<Card>
<Card.Header withoutDivider title="Simple Card" />
<Card.Subheader title="Subheader Title" />
<Card.Content>Card Content Goes Here</Card.Content>
</Card>
`;

export const nodeTitle = `
<Card>
<Card.Header withoutDivider title="Simple Card" />
<Card.Subheader title={<div style={{backgroundColor: 'yellow'}}>Custom Title Node</div>} />
<Card.Content>Card Content Goes Here</Card.Content>
</Card>
`;

export const suffix = `
<Card>
<Card.Header withoutDivider title="Simple Card" />
<Card.Subheader title="Subheader Title" suffix={<Box><Button>Click Me</Button></Box>} />
<Card.Content>Card Content Goes Here</Card.Content>
</Card>
`;
