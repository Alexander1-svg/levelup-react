module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],

    files: [
      { pattern: 'src/components/tests/ProductCard.spec.tsx' },
      { pattern: 'src/components/tests/CartProvider.spec.tsx'}
    ],

    preprocessors: {
      'src/components/tests/**/*.spec.tsx': ['karma-typescript'],
      'src/components/tests/**/*.spec.ts': ['karma-typescript']
    },

    reporters: ['progress', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    singleRun: true,

    karmaTypescriptConfig: {
    tsconfig: "./tsconfig.karma.json",
    compilerOptions: {
      jsx: 'react-jsx',
      module: 'ESNext',
      moduleResolution: 'Node',
      esModuleInterop: true,
      target: 'ES6'
    },
    exclude: ["node_modules"],
    coverageOptions: {
      instrumentation: false
  }
},

    mime: {
      'text/x-typescript': ['ts','tsx']
    }
  });
};
