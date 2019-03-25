module.exports = {
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  rules: {
    'func-names': 'off',
    'global-require': 'off',
    'prettier/prettier': 'error'
    'vars-on-top': 'off',
  },
  globals: {
    out: true,
    print: true,
    request: true,
    scriptVariables: true,
  },
};
