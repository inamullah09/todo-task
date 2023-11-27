// jest.config.ts

export default {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/Tests/__ mocks __/fileMock.js',
    },
}