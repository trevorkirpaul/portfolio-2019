# Trevor Kirpaul Portfolio - Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

`Added` for new features

`Changed` for changes in existing functionality

`Deprecated` for soon-to-be removed features

`Removed` for now removed features

`Fixed` for any bug fixes

`Security` in case of vulnerabilities

> Dates are formatted as `YYYY-MM-DD`, largest to smallest

## [Unreleased]

## [0.0.2] = 2019-06-30

### Changed

- README updated with storybook, changelog, and better description sections + netlify status badge
- added `Toast` component
- added `Modal` component
- major updates to Home and Snippets

### Added

- Heading component

## [0.0.1] - 2019-05-09

### Added

- changelog
- Storybook, a UI testing library
- Stories for all components
- comments for multiple components' interfaces
- explicit `paragraph` type for **Text** component, rather than only relying on the default
- Ramda package

### Changed

- updated CRA to 3.0
- local imports updated to absolute imports
- **TitlePanel** styles to use Ramda helper function, `pathOr` when deriving theme values from nested properties

### Fixed

- `_redirects` file to enable client-site routing correctly for [netlify](https://www.slightedgecoder.com/2018/12/18/page-not-found-on-netlify-with-react-router/)
