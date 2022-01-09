const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        production: true,
        TURN_DOMAIN: JSON.stringify(env.PROD_TURN_DOMAIN),
        TURN_PORT: JSON.stringify(env.PROD_TURN_PORT),
        TURN_USERNAME: JSON.stringify(env.PROD_TURN_USERNAME),
        TURN_PASSWORD: JSON.stringify(env.PROD_TURN_PASSWORD),
        WEBSOCKET_DOMAIN: JSON.stringify(env.PROD_WEBSOCKET_DOMAIN)
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/dist'),
    },
    mode: "development"
  }
}