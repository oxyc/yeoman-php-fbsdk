# yeoman init php

A yeoman generator for php projects. Currently it isn't very flexible but more
shaped to my personal needs.

## Getting started

1. `mkdir myapp && cd myapp`
2. `npm install git://github.com/oxyc/yeoman-php-fbsdk.git`
3. `yeoman init php`
4. Choose your configuration
5. `yeoman build`

## Features

_(Coming soon)_

## Project features

_(Coming soon)_

### Usage

* `yeoman build` Build the an optimized app to dist/.
* `yeoman test` Run your JS tests in the terminal (browser also works).
* `yeoman docs` Generate documentation to docs/index.html.
* `yeoman server` Starts a simple server. You can specify the directory as a
  target, eg. `yeoman server:docs` will serve the docs folder.
* `yeoman lint` Lint all source code.
* `yeoman watch` Compile compass files on save.
* `yeoman search` Search for JS applications to install.
* `yeoman compass` Run a compass compile.

### Repository structure

* `bin/` contains executable files
* `build/` contains build system files (eg. composer.phar, pre-commit)
* `app/` the application folder where all development should be done.
* `temp/` temporary staging folder for yeoman.
* `dist/` the optimized and distribution ready application
* `docs/` code documentation.
* `node_modules/` modules used by yeoman.
* `test/` contains js tests.

* `composer.json` PHP libraries used and maintained by Composer.
* `Gruntfile.js` Contains the buildsystem logic.
* `package.json` Metadata about your application

### Grunt / Yeoman plugins available

* grunt-doccoh
* grunt-docs-landing
* grunt-rm
* grunt-contrib-connect

### Dependencies

* [Yeoman](http://yeoman.io) (Building)

## Todo

* Make test suite work
* Add PHPUnit
* Add jscoverage, mocha test documentation
* Read up on grunt.log and do it properly
* LiveReload
* Fix jshintrc not being included

## License

MIT
