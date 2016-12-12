# Slider component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | array of numbers | [2, 7] | - | The slider's selected range |
| min | number | - | - | The absolute minimum of the slider's range |
| max | number | false | - | The absolute maximum of the slider's range |
| step | number | - | - | The slider's step |
| onChange | func | - | + | Called upon every value change |
| onAfterChange | func | - | - | Called after every value change |
| allowCross | bool | - | - | Allows the slider's handles to cross. True by default |

## Usage

```js
import Slider form 'wix-style-react/Slider';

// single handle
<Slider value={[3]} min={1} max={10}/>

// multi handles
<Slider value={[3, 4, 5]} min={1} max={10}/>
