const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const ngrok = require('./ngrok');
const config = require('./config');
const env = require('./config/dev');

module.exports = {
  mode: 'development',
  target: 'web',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'content-type,authorization,accept',
    },
    port: 5000,
    public: ngrok.baseAddress,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: 'none',
    open: true,
  },
  entry: {
    index: [
      'whatwg-fetch',
      'babel-polyfill',
      'proxy-polyfill',
      './client/js/index.jsx',
    ],
  },
  devtool: 'eval',
  output: {
    path: path.resolve('./public'),
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'functions'),
        ],
        use: {
          loader: 'eslint-loader',
          options: {
            fix: true,
            emitError: true,
          },
        },
      },
      {
        test: /.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'functions'),
        ],
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: false }],
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-async-to-generator',
                '@babel/plugin-transform-react-jsx-source',
                '@babel/plugin-syntax-dynamic-import',
                'lodash',
                'react-hot-loader/babel',
              ],
              ignore: [
                'functions',
              ],
            },
          },
        ],
      },
      {
        test: /.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          { loader: 'image-webpack-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'dev',
      ...config,
      ...env,
    }),
    new HtmlWebpackPlugin({
      path: path.resolve('./public'),
      filename: 'index.html',
      template: 'public/index.html.local',
    }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundles to index.html
      filename: '[name].js',
      plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
      ],
      entry: {
        vendor: [
          'firebase',
          'lodash',
          'moment',
          'moment-timezone',
          'react',
          'react-dom',
          'react-redux',
          'react-router',
          'react-router-dom',
          'react-router-redux',
          'redux',
          'redux-saga',
        ],
      },
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'client'), path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.css', '.json'],
  },
};
