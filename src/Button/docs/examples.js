export const primary = `
<Layout cols={2}>
<Cell>
  <Layout cols={2}>
    <Cell>
      <Layout cols={4} gap="10px"  alignItems="center">  
        <Button >standard</Button>
        <Box backgroundColor="D10" padding="3px"> 
          <Button skin="light" fullWidth>light</Button>
        </Box>
        <Button skin="destructive">destructive</Button>
        <Button skin="premium">premium</Button>
      </Layout>
    </Cell>
    <Cell>
      <Layout cols={4} gap="10px" justifyItems="center">  
        <Box backgroundColor="B20" padding="3px"> 
          <Button skin="transparent">transparent</Button>
        </Box>
      </Layout>
    </Cell>
  </Layout>
</Cell>
<Cell>
  <Layout cols={2}>
    <Cell>
      <Layout cols={4} gap="10px"  alignItems="center">   
        <Button priority="secondary">default</Button>
        <Button skin="inverted">inverted</Button>
        <Box backgroundColor="D10" padding="3px"> 
          <Button priority="secondary" skin="light" fullWidth>light</Button>
        </Box>
        <Button priority="secondary" skin="premium">premium</Button>
      </Layout>
    </Cell>
    <Cell>
      <Layout cols={4} gap="10px" justifyItems="center">  
        <Box backgroundColor="D10" padding="3px"> 
          <Button priority="secondary" skin="premium-light" fullWidth>PremiumLight</Button>
        </Box>
        <Box backgroundColor="Y30" padding="3px"> 
          <Button priority="secondary" skin="dark" fullWidth>dark</Button>
        </Box>
      </Layout>
    </Cell>
  </Layout>
</Cell>
</Layout>
`;

export const sizes = `
<Layout cols={4} gap="10px"> 
  <Button size="large">large</Button>
  <Button size="medium">medium</Button> 
  <Button size="small">small</Button>
  <Button size="tiny">tiny</Button>  
</Layout>
`;

export const affixes = `
<Layout cols={4} gap="10px"> 
  <Button size="medium" prefixIcon={<Add />}>Prefix</Button>
  <Button size="small" suffixIcon={<ChevronDownSmall/>}>Suffix</Button>
</Layout>
`;

export const states = `
<Layout cols={4} gap="10px">
  <Button><Loader size="tiny" /></Button>
  <Button disabled>Disabled</Button>
</Layout>
`;

export const custom = `
<Layout cols={3} gap="10px">
  <Button as="a">HTML a</Button>
  <Button skin="premium" as={Link} to="/wix">React Router</Button>
</Layout>
`;
