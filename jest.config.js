module.exports = {


  setupFiles: ['./src/__test__/jest.setup.js'], // setup the test environment

  transform: {

    '.*': '<rootDir>/node_modules/babel-jest',

  },

};
