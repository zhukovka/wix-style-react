# SideMenu

A **WIP** collection of dumb components for easy side menu combination.

yet to be done:

* multi level links
* RTL

## Components

### Logo `<SideMenu.Logo/>`

Container for your logo (or anything you want)

| propName | propType | defaultValue | isRequired | description |
| -        | -        | -            | -          | -           |
| onClick  | func     | -            | -          | -           |
| children | node     | -            | -          | -           |


### Navigation `<SideMenu.Navigation/>`

Container for `NavigationLink` & `NavigationSeparator` (or any other node)

| propName | propType | defaultValue | isRequired | description |
| -        | -        | -            | -          | -           |
| children | node     | -            | -          | -           |


### NavigationLink `<SideMenu.NavigationLink />`

Main navigation item

| propName          | propType | defaultValue | isRequired | description                                                                        |
| -                 | -        | -            | -          | -                                                                                  |
| isActive          | bool     | false        | -          | slightly different styling to indicate active link                                 |
| isDiminishedHover | bool     | false        | -          | slightly different styling for hover (e.g. no background transition)               |
| children          | node     | -            | -          | -                                                                                  |
| ...rest           | *        | -            | -          | any other prop will be added to root element (e.g. `onClick`, `onMouseEnter` etc.) |

### NavigationSeparator `<SideMenu.NavigationSeparator />`

thin line to separate nav items

| propName | propType | defaultValue | isRequired | description |
| -        | -        | -            | -          | -           |
| children | node     | -            | -          | -           |


### Promotion `<SideMenu.Promotion />`

dump container for promotion button. Tries to stick to the bottom

| propName | propType | defaultValue | isRequired | description |
| -        | -        | -            | -          | -           |
| children | node     | -            | -          | -           |


### Footer `<SideMenu.Footer />`

container for `FooterLink`s (or any other node)

| propName | propType | defaultValue | isRequired | description |
| -        | -        | -            | -          | -           |
| children | node     | -            | -          | -           |


### FooterLink `<SideMenu.FooterLink />`

stylized link

| propName | propType | defaultValue | isRequired | description                                                                          |
| -        | -        | -            | -          | -                                                                                    |
| icon     | node     | -            | -          | block displayed on the left of link. Can (and should) be icon from `wix-style-react` |
| children | node     | -            | -          | -                                                                                    |
| ...rest  | *        | -            | -          | any other prop will be added to root element (e.g. `onClick`, `onMouseEnter` etc.)   |


## Important remarks

* `<SideMenu/>` doesn't care how and where you render it. It takes full
width & height so it's up to you to set parent styling appropriately

* `<SideMenu/>` has no padding or margin. So, if you want e.g. logo to not stick
to the top, adjust padding or margin to the children of `<SideMenu.Logo/>`

* when height is too little, `<SideMenu/>` add scrollbar to `<SideMenu.Navigation/>`

