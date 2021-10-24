module.exports = {
  // Stop looking in parent folders once ESLint finds a configuration with "root": true.
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  root: true,

  // Use `@babel/eslint-parser` parser, as ESLint does not natively support experimental
  // ECMAScript features such as 'dynamic import' or 'class properties'.
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parser: '@babel/eslint-parser',

  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
  },

  extends: [
    // https://github.com/standard/standard/blob/master/RULES.md
    'standard',
    // Turns off all rules that are unnecessary or might conflict with Prettier
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
  ],

  rules: {
    // Disallow the use of console.
    // http://eslint.org/docs/rules/no-console
    'no-console': 'error',

    // Disallow the use of debugger.
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',
  },
};
