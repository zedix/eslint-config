# @zedix/eslint-config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Installation

```
$ yarn add --dev eslint prettier https://github.com/zedix/eslint-config.git#v1.x.x
```

## Usage

Once the `@zedix/eslint-config` package is installed, you can use it by specifying `@zedix/eslint-config` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of the [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.js
module.exports = {
  extends: ['@zedix/eslint-config'],
};

// .eslintrc.js
module.exports = {
  extends: ['@zedix/eslint-config/vue'],
};
```
