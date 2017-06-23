# NCO UI

> The Ness content office application built with [Angular](https://angularjs.org), [ES6](https://git.io/es6features), and [Webpack](http://webpack.github.io/)

# Getting Started
## Dependencies
Tools needed to run this app:
* `gulp`, `node` and `npm`

## Installing
* `npm install` to install dependencies

## Running the App
NCO uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `npm start` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.
 
### Tasks
Here's a list of available tasks:
* `gulp serve`
  * builds and starts a dev server, serving the client folder.
* `gulp watch`
  * alias of `serve`
* `gulp component`
  * scaffolds a new Angular component.
  `gulp component --name componentName --parent ../ParentFolder`
* `gulp webpack`
  * builds modules.
### Testing
To run the tests, run `npm test`.