// jest.config.js
module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
    coverageReporters: ['lcov', 'text', 'html'],
  };
  