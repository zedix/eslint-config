module.exports = {
  /**
   * Stop looking in parent folders once ESLint finds a configuration with "root": true.
   *
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy|root}
   */
  root: true,

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options|parserOptions}
   */
  parserOptions: {
    ecmaVersion: 2018,
    // Use Babel parser, as ESLint does not natively support experimental ECMAScript
    // language features such as 'dynamic import' or 'class properties'
    parser: 'babel-eslint', // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
    sourceType: 'module',
  },

  extends: [
    // https://github.com/standard/standard/blob/master/RULES.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
  ],

  rules: {
    'no-console': 'warn',
  },
};
