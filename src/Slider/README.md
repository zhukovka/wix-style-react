# Slider component

> A slider component with multi-range support

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
