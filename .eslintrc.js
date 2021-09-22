module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-console': 'off',
    camelcase: 0,
  },
};
