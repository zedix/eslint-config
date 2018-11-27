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
    // Use Babel parser, as ESLint does not natively support experimental
    // ECMAScrip language features such as 'dynamic import' or 'class properties'
    parser: 'babel-eslint', // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
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
    'no-debugger': 'error',
    'no-console': 'error',
  },
};
