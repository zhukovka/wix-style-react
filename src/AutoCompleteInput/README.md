# AutoCompleteInput component

> Suggestions component for Input. (Focus to see in action)

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| suggestions | array | - | - | Array of objects to display as suggestions when focused. Objects can include *text* and *node* |
| disabled | bool | false | - | |
| onSet | func | - | - | Callback when the user selects one of the selections. Called with the selection. |
| bottomNode | node | | - | Extra node shown at the bottom of the suggestions list |
