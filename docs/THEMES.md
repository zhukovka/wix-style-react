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
Create a new themed component which renders the core component.
The styles might be dependant by some additional props.
Note that we wouldn't want to pass those additional props to the core component, but instead we would like to use them in order to generate the theme object which we will then pass to the Core component.

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
