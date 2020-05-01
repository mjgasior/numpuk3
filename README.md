# numpuk3

This app is based on `electron` and `create-react-app`.

## Startup:

1. Run `yarn`
2. Run `yarn dev`

Run `yarn run pack` (not `yarn pack` because this invokes packing!) to build an executable version or run `yarn dist` to create an installer.

## Packages - Electron:

- `electron` - as many devs were [mistaking](https://www.electronjs.org/blog/npm-install-electron "Electron blog") `electron` for `electron-prebuilt`, the Electron team has joined them together (Electron is a JavaScript runtime that bundles Node.js and Chromium and this module helps you easily install the `electron` command for use on the command line without having to compile anything)
- `electron-is-dev` - this library helps to select proper address while loading the page to the window and turning on the developer tools while in development mode
- `foreman` - it is used to run two processes in the same time - the React Webpack server and Electron

## Packages - React:

- `react-router-dom` - the standard routing library for React, keeps your UI in sync with the URL - it has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in (these are Document Object Model bindings for React Router)
- `styled-components` - allows to write plain CSS in components without worrying about class name collisions, it helps to write CSS that's scoped to a single component and does not leak to any other element in the page

## Resources:

- [Building an Electron application with create-react-app](https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/)
- [Readme.md markdown cheatsheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)
- [Using Electron with React: The Basics](https://medium.com/@brockhoff/using-electron-with-react-the-basics-e93f9761f86f)
