# Notification component

> composition of a set of label and buttons wrapped by a dropping notification.

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| show | boolean | false | - | Show or hide the notification triggered by user |
| theme | string (standard, error, success, warning) | standard | - | The theme color of the notification |
| size | string (small, big) | small | - | The size of the notification. big for a full action button |
| type | string (global, local) | global | - | global pushes the content while local is above it and fades after timeout |
| timeout | number | 6000 | - | time in msec for local notification to disappear (will be ignored in global notification) |
| zIndex | number | - | - | z-index property | 
