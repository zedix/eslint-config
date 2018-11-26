module.exports = {
  // Stop looking in parent folders once ESLint finds a configuration with "root": true
  root: true,

  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    // Use Babel parser, as ESLint does not natively support experimental ECMAScript
    // language features such as 'dynamic import' or 'class properties'
    parser: 'babel-eslint',
  },

  extends: [
    // https://github.com/standard/standard/blob/master/RULES.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
  ],

  rules: {
    // Allows omitting parens when there is only one argument
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],

    // Enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    indent: ['error', 2],

    'no-console': 'warn',
  },
}
