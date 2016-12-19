# MessageBox component

## MessageBoxLayout1 Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| title	 | Node | - | + | Title for Messag Box |
| content | Node | - | + | Content of the Message Box |
| primaryButtonLabel | string | - | + | Primary Button Label |
| secondaryButtonLabel | string | - | - | Secondary Button Label |
| onPrimaryButtonClick | func | - | - | Primary Button Click callback |
| onSecondaryButtonClick | func | - | - | Secondary Button Click handler |
| imageUrl | string | - | - | Header image url |
| onClose | func | - | + | Close callback |

## MessageBoxLayout2 Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| hideFooter | bool | - | - | Hide or show footer |
| confirmText | string | - | - | Confirm button Label |
| cancelText | string | - | - | Cancel button Label |
| style | string | - | - | style of the message box, (green, blue , red) |
| onOk | func | - | - | Ok callback |
| onCancel | func | - | - | Cancel callback |
| title | Node | - | - | title of the Message Box |
| children | array | - | - | Message box content |
