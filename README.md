# Express StatusBoard

**Notice: This is a work in progress, some things might not work as expected**

This package exposes an api and cli for managing a project StatusBoard. It
is a thin wrapper around `@pkgjs/statusboard` with configuration for Express
projects.

The status board website can be found here: https://expressjs.github.io/statusboard/

## Usage

The package is published on the Github Pacakge Registry.  With it you can
build and run the StatusBoard locally.

```
$ npm i @expressjs/statusboard --registry https://npm.pkg.github.com/
```

Build and serve the StatusBoard locally:

```
$ exsb build
$ exsb serve
```
