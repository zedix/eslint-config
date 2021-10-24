module.exports = {
  parser: 'vue-eslint-parser',

  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/vue3-strongly-recommended',
    // standard + prettier
    './index.js',
  ],

  rules: {
    // Disable check of attribute hyphenation
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md
    'vue/attribute-hyphenation': 'off',

    // Enforce PascalCase component names in templates
    // https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot',
          'router-view',
          'router-link',
          'no-ssr',
          'nuxt',
          'nuxt-link',
          'nuxt-child',
        ],
      },
    ],

    // Set html indent to `2` spaces
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],

    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
    'vue/html-self-closing': [
      'error',
      {
        html: {
          // Enforce self-closing on HTML void elements (<img/>)
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],

    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
    'vue/max-attributes-per-line': [
      'error',
      {
        // Number of maximum attributes per line when the opening tag is in a single line.
        singleline: 5,
        // Number of maximum attributes per line when a tag is in multiple lines.
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],

    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/multiline-html-element-content-newline.md
    'vue/multiline-html-element-content-newline': 'error',

    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/singleline-html-element-content-newline.md
    'vue/singleline-html-element-content-newline': 'off',
  },

  globals: {
    $nuxt: true,
    $fetch: true,
  },

  overrides: [
    {
      files: ['**/*.unit.js'],
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false,
      },
    },
  ],
};
