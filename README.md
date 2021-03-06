# yarn-config-directory [![NPM version](https://img.shields.io/npm/v/yarn-config-directory.svg?style=flat)](https://www.npmjs.com/package/yarn-config-directory) [![NPM monthly downloads](https://img.shields.io/npm/dm/yarn-config-directory.svg?style=flat)](https://npmjs.org/package/yarn-config-directory) [![NPM total downloads](https://img.shields.io/npm/dt/yarn-config-directory.svg?style=flat)](https://npmjs.org/package/yarn-config-directory) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/yarn-config-directory.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/yarn-config-directory)

> Get the absolute path to the global yarn config directory.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save yarn-config-directory
```

## Usage

Path varies by platform.

```js
const yarnConfig = require('yarn-config-directory');

console.log(yarnConfig());
//=> '/Users/jonschlinkert/.config/yarn'
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Author

**Jon Schlinkert**

* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)
* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on March 21, 2018._