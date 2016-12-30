# Slider component

> A slider component with multi-range support

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | array of numbers | [2, 7] | - | The slider's selected range |
| min | number | 1 | - | The absolute minimum of the slider's range |
| max | number | 20 | - | The absolute maximum of the slider's range |
| step | number | 1 | - | The slider's step |
| onChange | func | - | + | Called upon every value change |
| onAfterChange | func | - | - | Called after every value change |
| allowCross | bool | true | - | Allows the slider's handles to cross. |
| displayMarks | bool | {} | - | Controls the visibility of the marks. |
