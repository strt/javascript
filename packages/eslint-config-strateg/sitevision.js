module.exports = {
  extends: 'airbnb-base/legacy',
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
  },
  globals: {
    out: true,
    print: true,
    request: true,
    scriptVariables: true,
  },
};
