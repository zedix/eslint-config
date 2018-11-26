# @zedix/eslint-config

https://img.shields.io/badge/version-1.0.2-blue.svg?maxAge=2592000

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) with [Prettier](https://prettier.io/)

## Installation

```
$ yarn add --dev eslint prettier https://github.com/zedix/eslint-config.git#v1.x.x
```

## Usage

Once the `@zedix/eslint-config` package is installed, you can use it by specifying `@zedix/eslint-config` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of the [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

In your `.eslintrc.js`:

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

Alternatively, you can add an eslint config in the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@zedix/eslint-config/vue"
  }
}
```

In your `.prettierrc.js`:

```js
// .prettierrc.js
const prettier = require('@zedix/eslint-config/vue');

module.exports = prettier;
```
