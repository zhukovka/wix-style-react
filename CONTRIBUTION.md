# Contribution
You are more than welcome to contribute by creating pull-requests.

Please see [Button](https://github.com/wix/wix-style-react/tree/master/src/Button) component for reference

### Components design (in progress)
* This library is using es6 + jsx - please follow it
* All assets are in src/assets folder
* Each component must have e2e + unit testing provided with drivers
* One React component per js file
* Most of the components needs to be a [controlled components](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/), if you still think that a component should be uncontrolled after you read the article you are welcome to push a pr for it
* Components needs to support rtl and ltr props

### Adding new component
* Check [Adding new components](https://github.com/wix/wix-style-react/projects/1) project to see if someone is already working on your component or if there is already an open issue for that component
* If no one is working on it and no issue exists, create a new issue for your component, add it to [Adding new components](https://github.com/wix/wix-style-react/projects/1) -> “In Progress” and assign it to yourself
* Add the component docs to [stories](https://github.com/wix/wix-style-react/tree/master/stories)
    * A story is consists of properties, usage examples and code examples, please refer to [Button docs](https://github.com/wix/wix-style-react/tree/master/stories/Button) for example
    * Make sure to add your component to [Storybook config](https://github.com/wix/wix-style-react/blob/master/.storybook/config.js)

### Enhancing an existing component:
* Check [Enhancing existing components](https://github.com/wix/wix-style-react/projects/2) project if someone already working on your request or there is an open issue for it
* If no one is working on it and no issue exists, create a new issue, add it to [Enhancing existing components](https://github.com/wix/wix-style-react/projects/2) -> “In Progress” and assign it to yourself
