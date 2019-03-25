export const skins = `
<Layout gap={0} justifyItems="center">
  <CloseButton />
  <Box backgroundColor="D10">
    <CloseButton skin="light" />
  </Box>
  <Box backgroundColor="Y30">
    <CloseButton skin="dark" />
  </Box>
  <CloseButton skin="standardFilled" />
  <Box backgroundColor="B20">
    <CloseButton skin="lightFilled" />
  </Box>
</Layout>
`;

export const custom = `
<Layout gap={0} justifyItems="center">
  <Box backgroundColor="B20">
    <CloseButton skin="lightFilled"><Help /></CloseButton>
  </Box>
  <Box backgroundColor="B20">
    <CloseButton skin="lightFilled"/>
</Box>
</Layout>
`;

export const sizes = `
<Layout gap={0} justifyItems="center" alignItems="center">
  <CloseButton />
  <CloseButton size="medium" />
</Layout>
`;
