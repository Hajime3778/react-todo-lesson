module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
