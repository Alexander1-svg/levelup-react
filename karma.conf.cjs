const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      { pattern: 'src/components/tests/ProductCard.spec.tsx' },
      { pattern: 'src/components/tests/CartProvider.spec.tsx' }
    ],

    preprocessors: {
      'src/components/tests/ProductCard.spec.tsx': ['webpack'],
      'src/components/tests/CartProvider.spec.tsx': ['webpack']
    },

    reporters: ['progress'],
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
      include: ["src/components/tests/**/*.ts", "src/components/tests/**/*.tsx"],
      exclude: ["node_modules"],
      coverageOptions: {
        instrumentation: false
      }
    },

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    client: {
      clearContext: false
    },

    // Configuración de Webpack para transpilar React + TSX
    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript'
                ]
              }
            }
          }
        ]
      }
    }
  });
};
