module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true
    },
    extends: [
      'plugin:@next/next/recommended',
      'plugin:react/recommended',
      'airbnb',
      'airbnb-typescript',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'space-before-function-paren': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'off',
      "import/prefer-default-export": "off",
      'jsx-a11y/anchor-is-valid': 'off',
      'react/require-default-props': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-no-comment-textnodes': 'off',
      '@next/next/no-img-element': 'off'
    }
  };