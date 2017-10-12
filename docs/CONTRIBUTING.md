# Contributing

We're thrilled to receive contributions, even on a rainy day :)

### Checklist

We want your input but we also want good quality. Hence contributors are required to:

* submit concise and clear issues with reproducible examples
* submit focused pull requests that tackle one thing only

### Contacts

* product/UI/UX [Ben Benhorin](https://wix.slack.com/messages/@benb)
* code/issues/PRs [Lior Belinksy (@lbelinsk)](https://github.com/lbelinsk) [Arijus Šukys (@argshook)](https://github.com/argshook)

## Setup

> __Note:__ This library depends on watchman, install it by following [this guide](https://facebook.github.io/watchman/docs/install.html).

```sh
nvm use
npm install
npm start
open localhost:6006
```

After `npm start` a local server will go live at `localhost:6006` with [storybook](https://storybook.js.org/) available.
storybook is your reference/sandbox for developing components.


See [Badge](https://github.com/wix/wix-style-react/blob/master/src/Badge/Badge.js) component for reference


### Components guidelines 

* One component per file
* All assets in `src/assets` folder
* e2e & unit test as well as enzyme & protractor testkits
* Prefer [controlled components](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
* support `rtl` boolean prop to support right-to-left languages

### Adding new component

* Check github issues to see if no one else is working on the same component
* Each component in the library extends WixComponent, so please do it with you component as well.
* Use `WixComponent` as super class for your component, e.g.: `class MyComponent extends WixComponent`
* Design according to [Zeplin](https://app.zeplin.io/project/5864e02695b5754a69f56150) design created by UX guild.
* Configure storybook to generate documentation for you, follow [Adding Story](https://wix.github.io/wix-style-react/?selectedKind=Introduction&selectedStory=Adding%20Story&full=0&down=0&left=1&panelRight=0) guide.
* Add unit and e2e tests as well as testkits for enzyme and protractor.
* Export your `testkitFactory` from the following files:
    * `wix-style-react/testkit/index.js`
    * `wix-style-react/testkit/enzyme.js`
    * `wix-style-react/testkit/protractor.js`
