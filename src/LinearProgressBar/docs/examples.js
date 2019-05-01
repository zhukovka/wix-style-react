export const defaultRender = `<LinearProgressBar value={20} />`;

export const errors = `<Layout>
  <Cell>
    <LinearProgressBar error value={20} />
  </Cell>
      <Cell>
    <LinearProgressBar light error value={20} />
  </Cell>
    <Cell>
    <LinearProgressBar showProgressIndication error errorMessage="some error" value={20} />
  </Cell>
</Layout>`;

export const progressIndication = `<Layout>
  <Cell>
    <LinearProgressBar showProgressIndication value={0} />
  </Cell>
  <Cell>
    <LinearProgressBar showProgressIndication value={50} />
  </Cell>
  <Cell>
    <LinearProgressBar showProgressIndication value={100} />
  </Cell>
</Layout>`;

export const themes = `<Layout>
  <Cell>
    <LinearProgressBar value={20} />
  </Cell>
    <Cell>
    <LinearProgressBar light value={20} />
  </Cell>
</Layout>`;
