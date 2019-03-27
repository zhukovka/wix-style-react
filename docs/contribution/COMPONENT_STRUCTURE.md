# Component structure

Component consists of multiple files. The following structure is the basic structure for a component.

## Component Files

```
src/ComponentName
├── index.js                                # entry file for component
├── ComponentName.js                        # component implementation
├── ComponentName.scss                      # component stylesheet
├── ComponentName.uni.driver.js             # public testkit based on unidriver
├── test
│   ├── ComponentName.spec.js               # unit tests
│   ├── ComponentName.e2e.js                # visual screenshot tests
│   ├── ComponentNameStories.js             # optional test stories for visual screenshot tests
│   ├── ComponentName.private.uni.driver.js # optional private testkit
│   └── storySettings.js                    # optional file for reusable test story data
└── docs
    ├── index.story.js                      # entry file for documentation
    ├── README.md                           # optional additional information
    └── README.DESIGN-SPEC.md               # component specification
```

### `index.js`

1. Every component has index file exporting the default entry for easy importing.

### `ComponentName.js`

1. Component implementation. It can either be standalone or composition of multiple components
1. Read [Component Guidelines section](./COMPONENT_GUIDELINES.md) for more information.

### `ComponentName.scss`

1. Almost every component will have a stylesheet.
1. Read [Styling section](./STYLING.md) for more information.

### `ComponentName.spec.js`

1. Unit tests of component behavior and methods.
1. Read [Tests section](./TESTING.md) for more information.

### `ComponentName.driver.js`

1. Every component exposes a public driver It is also used in component tests (`ComponentName.spec.js`). This way driver itself is tested.
1. Read [Test Drivers section](./TEST_DRIVERS.md) for more information.

### `ComponentName.e2e.js`

1. Browser tests for component.
1. Read [Tests section](./TESTING.md) for more information.

### `docs/index.story.js`

1. Entry file for documentation. It uses `.story` convention in order to apply automated documentation tool.
1. Read [Component Documentation section](./DOCUMENTING_COMPONENTS.md) for more information.

### `docs/README.DESIGN-SPEC.md`

The purpose of this document is to plan the implementation of a new component.
It is not a place for documentation for consumers.
Component specification may include:

- Reference to UX spec
- Props API definitions
- Styling API definitions
- Detailed behavior definitions
- Any other implementation details

See this [COMPONENT-SPEC-TEMPLATE](./COMPONENT-SPEC-EXAMPLE.md)

## Component Essentials

Each component has also an "entry" in a few common files. Most of these are created during `npm run generate`.

```
wix-style-react
|__stories
|  |__index.js        # loads all stories
|__testkit
|  |__index.js        # all vanila drivers
|  |__enzyme.js       # all enzyme drivers
|  |__protractor.js   # all protractor drivers
|  |__puppeteer.js    # all puppeteer drivers
```
