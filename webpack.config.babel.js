import webpack from 'webpack';

export default {
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    rules: [{
        enforce: "pre",
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-simple-loader',
          options: {}
        }],
      },
      {
        test: /\.(tag|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {}
        }]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.tag']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({ riot: 'riot' })
  ]
};
