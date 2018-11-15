module.exports = {
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    nashorn: true,
  },
  rules: {
    'vars-on-top': 0,
    'func-names': 0,
    'global-require': 0,
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  },
  globals: {
    out: true,
    print: true,
    request: true,
    scriptVariables: true,
  },
};
