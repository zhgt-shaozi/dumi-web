module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    'react/no-unknown-property': ['warn', { ignore: ['css'] }],
  },
};
