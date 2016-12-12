# RadioGroup component

## RadioGroup Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | number, string | - | - | Selected radio button value |
| onChange | func | - | - | Callback function when user selects a different value |

## RadioGroup.Radio Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | number, string | - | - | Value of this radio button |
| vAlign | top, center | top | - | Positioning of the radio bottom compared to the label |

## Usage

```js
import RadioGroup form 'wix-style-react/RadioGroup';

// standard
<RadioGroup value={1}>
  <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
  <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
  <RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio>
</RadioGroup>
