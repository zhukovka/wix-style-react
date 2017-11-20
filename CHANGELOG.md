# Changelog

All notable changes to this projet will be documented in this file.

## 1.1.4527 - 2017-11-20
### Changed
- Themes implementation without provider 
[1151](https://github.com/wix/wix-style-react/pull/1151)

## 1.1.4526 - 2017-11-20
### Added
- `<StickyPage>` - additional e2e tests

- `<GoogleAddressInput>` - Allow fetching address data via Places API [1141](https://github.com/wix/wix-style-react/pull/1141)
### Fixed
- TpaThemeProvider - small bug (https://github.com/wix/wix-style-react/commit/d66bf2107f1376c5034ef835303da20716df7e82)

- `<Button>` - Fixed incorrect padding in RTL [1142](https://github.com/wix/wix-style-react/pull/1142)

- `<DropdownLayout>` - Use lodash findIndex instead of native (for IE support)[1143](https://github.com/wix/wix-style-react/pull/1143)

- `<DropdownLayout>`, `<GoogleAddressInput>`, `<MultiSelect>` - Added a selectedHightlight prop to DropdownLayout, meaning after selecting an option if it should highlight it when dropdown is reopened [1136](https://github.com/wix/wix-style-react/pull/1136)

- `<DropdownLayout>` - mouseClickOutside method was fixed [1147](https://github.com/wix/wix-style-react/pull/1147)


## 1.1.4525 - 2017-11-18
### Added
- themes: progressed with themes poc

- `<StickyPage>` - new component (https://github.com/wix/wix-style-react/pull/1127)

### Fixed
- `<GoogleAddressInput>` - pixelated google credit picture in the footer.
(https://github.com/wix/wix-style-react/pull/1128)

- `<Tooltip>` - Popover jumping problem(https://github.com/wix/wix-style-react/pull/1137)

## 1.1.4524 - 2017-11-14
### Added
- `<ToogleSwitch/>` - Added support for colors, in order to add component to Wix Viewer (https://github.com/wix/wix-style-react/commit/aa4df9ceb95bd3786f812cb44831f027dbcdb2a4)

- Themes harmless side project as a POC.(https://github.com/wix/wix-style-react/commit/2d50e0a99f04fa8af7eb7566fb5b2930d36baeba)
### Fixed
- `<FieldWithSelectionComposite>` - fix-selection-input-type (https://github.com/wix/wix-style-react/pull/1126)

- release.js: run gh-pages-auto-release only when releasing(https://github.com/wix/wix-style-react/commit/d3d8035e57de0ce97c6b1c0544638a0798ec6760)

## 1.1.4523 - 2017-11-13
### Added
- `<Range/>` - now able to work with `<DatePicker/>`s to create date
range component (https://github.com/wix/wix-style-react/commit/9b32f2a397eec268052036be5230e5b67ea3eda6)

### Fixed
- `<InputWithOptions/>` - do not hide dropdown if `options.length === 0` (https://github.com/wix/wix-style-react/pull/1116)

## 1.1.4252 - 2017-11-10
### Added
- `<Tooltip/>` `shouldUpdatePosition` prop (https://github.com/wix/wix-style-react/commit/da9c496396e7395de53dfb9a8bacbd7520c61012)

### Changed
- `<Tooltip/>` (https://github.com/wix/wix-style-react/commit/5b3fa3b0367bffe512b7ed44b11932b4d456e6ae):
    - default `maxWidth` now `204px`
    - default `textAlign` now `left`
