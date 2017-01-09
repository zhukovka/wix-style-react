Using composite component validators, you can specify the `children` requirements.
If some component is required, optional, ...

```js
class InputWithOptionalLabel extends Component {
  static propTypes {
    children: children(optional(Label), once(Input))
  }
}

class InputWithRequiredLabel extends Component {
  static propTypes: {
    children: children(once(Label), once(Input))
  }
}
```
