`<Notification>` is a compound component and requires `<Notification.TextLabel/>` and `<Notification.CloseButton/>` to be used as children.

<details>
  <summary>
    `<Notification.TextLabel/>` (required)
  </summary>

  Use this component to display the notification message

  | propName   | propType   | defaultValue   | isRequired   | description         |
  | ---------- | ---------- | -------------- | ------------ | -------------       |
  | children   | string     | -              | -            | The text to display |
</details>

<details>
  <summary>
    `<Notification.CloseButton/>` (required)
  </summary>

  Use this component to display the close button
</details>

<details>
  <summary>
    `<Notification.ActionButton/>`
  </summary>

  Use this component to supply an action button for the notification

  | propName   | propType                  | defaultValue   | isRequired              | description                              |
  | ---------- | ----------                | -------------- | ------------            | -------------                            |
  | children   | string                    | -              | -                       | The text to display                      |
  | type       | string (button, textLink) | -              | button                  | A Button component or TextLink component |
  | onClick    | function                  | -              | e => e.preventDefault() | -                                        |
  | link       | string                    | -              | -                       | A url to navigate to on click            |
</details>
