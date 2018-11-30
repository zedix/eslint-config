# @zedix/eslint-config

![version](https://img.shields.io/github/package-json/v/zedix/eslint-config.svg?maxAge=60)
![tag](https://img.shields.io/github/tag/zedix/eslint-config.svg?maxAge=60)

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
```

or

```js
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
module.exports = require('@zedix/eslint-config/prettier');
```

## References

[Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
