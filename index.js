module.exports = {
  // Stop looking in parent folders once ESLint finds a configuration with "root": true.
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  root: true,

  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    // Use `babel-eslint` parser, as ESLint does not natively support experimental
    // ECMAScript features such as 'dynamic import' or 'class properties'.
    // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
    parser: 'babel-eslint',
  },

  extends: [
    // https://github.com/standard/standard/blob/master/RULES.md
    'standard',
    // Turns off all rules that are unnecessary or might conflict with Prettier
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    // 'standard/array-bracket-even-spacing': 'off',
    // 'standard/computed-property-even-spacing': 'off',
    // 'standard/object-curly-even-spacing': 'off'
    'prettier/standard',
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
