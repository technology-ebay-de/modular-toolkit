const packages = ['hocs', 'selectors', 'bricks'];

// noinspection JSUnresolvedFunction
module.exports = wallaby => ({
    files: ['setupJest.js', '!**/*.test.js', '!**/node_modules/**'].concat(
        packages.map(pkg => `packages/${pkg}/**/*.js`)
    ),

    filesWithNoCoverageCalculated: [
        '**/index.js',
        '**/index-esnext.js',
        '**/webpack.config.js',
        '**/__mocks__/**',
        'setupJest.js'
    ],

    tests: ['**/*.test.js', '!**/node_modules/**'],

    env: {
        type: 'node',
        runner: 'node'
    },

    compilers: {
        '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'jest'
});
