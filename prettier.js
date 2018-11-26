module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  printWidth: 100,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
}
