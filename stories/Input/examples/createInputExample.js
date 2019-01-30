import { createPropsArray } from '../../utils/Components/LiveCodeExample';

export default props => `
<Input ${createPropsArray(props).join('\n       ')} />
`;
