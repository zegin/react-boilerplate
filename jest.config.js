module.exports = {
    verbose: true,
    setupFiles: [
        '<rootDir>/.jest/register-context.js',
        '<rootDir>/.jest/enzyme-setup.js'
    ],
    moduleNameMapper: {
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/test/client/__mocks__/fileMock.js"
    }
};