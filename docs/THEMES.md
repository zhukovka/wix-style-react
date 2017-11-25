# Themes

The purpose of this library is to be extended by different themes.

## Why do we need themes
- Prevent code duplication
- Make it easy to style components to match the different designs.

## Wix themes
The themes we currently have at Wix (WIP):
- [Backoffice](https://github.com/wix/wix-style-react-backoffice)

## Creating a new theme
A theme is simply an object that we need to pass to the core component as a prop.
Each component must have it's own theme object.
It should have a specific structure (TBD).
### Create a new component library
Create a new component library inside wix-style-react mono repo, and name it wix-style-react-\<theme\>.

### Implement your components
We want to create a new themed component which renders the core component with additional styles.

The core component is already implemented in `wix-style-react`, and the styles will be generated from the custom theme you need to write.

The theme is a fucnction that gets some optional additional props as arguments, and returns an object with a very specific structure. Each component has it's own theme structure.
For example:

```javascript
const theme = ({height, skin}) => ({
  fontSize: height === 'small' ? '14px' : '20px',
  color: skin === 'normal' ? 'white' : 'blue',
  backgroundColor: skin === 'normal' ? 'blue' : 'white',
  
  hover: {		
    color: 'blue',		
    backgroundColor: 'green'		
  }
});
```

Note that we usually wouldn't want to pass those additional props to the core component, although it is possible.
Those props are being used to generate the theme object which we will then pass to the Core component.

All of that is being taken care of with the `ThemedComponent` component which expects to get the core component as a `children` prop, a `theme` function prop, and some optional props which will be used by the theme function in order to generate the theme object.

Here is an example of how to implement a themed Button component:

```javascript
import CoreButton from 'wix-style-react/Button';
import {ThemedComponent} from 'wix-style-react/theme';

const theme = ({height, skin}) => ({
  fontSize: height === 'small' ? '14px' : '20px',
  color: skin === 'normal' ? 'white' : 'blue',
  backgroundColor: skin === 'normal' ? 'blue' : 'white',
  
  hover: {		
    color: 'blue',		
    backgroundColor: 'green'		
  }
});

const Button = ({height, skin, ...coreProps}) => (
  <ThemedComponent theme={theme} height={height} skin={skin}>
    <CoreButton {...coreProps}/>
  </ThemedComponent>
);
```

#### Providing classes instead of theme
If you insist of using css to provide your own styles, You can import the actual core React component and provide it your own classes. This is not the best practice since it requires to be aware of the core component's implementation. You would have to be familiar with the exact `classes` core prop's structure. 

```javascript
import CoreButton from 'wix-style-react/Button/Button';
import styles from './Button.scss';

const Button = props => (
  <CoreButton {...props} classes={styles}/>
); 
```
