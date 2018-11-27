module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf', // Default: 'auto'
  htmlWhitespaceSensitivity: 'css',
  printWidth: 80,
  proseWrap: 'never', // Default: 'preserve'
  semi: true,
  singleQuote: true, // Default: false
  tabWidth: 2,
  trailingComma: 'es5', // Default: 'none'
  useTabs: false,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: Infinity,
      },
    },
  ],
};
