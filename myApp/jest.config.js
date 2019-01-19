module.exports = {
    preset: 'jest-preset-angular',
    roots: ['src'],
    testMatch: [
        '<rootDir>/src/test/**/*.spec.ts'
    ],
    setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',
    // transformIgnorePatterns: ['node_modules/(?!@ngrx|@ionic-native|@ionic)']
    transformIgnorePatterns: ['node_modules/']
};