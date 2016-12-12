# Checkbox component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| checked | bool | false | - | |
| disabled | bool | false | - | |
| onChange | func | - | - | Callback function when user changes the value of the component |

## Usage

```js
import Checkbox form 'wix-style-react/Checkbox';

// standard
<Checkbox/>
<Checkbox checked/>
<Checkbox disabled/>
<Checkbox onChange={() => console.log('changed!')}/>
