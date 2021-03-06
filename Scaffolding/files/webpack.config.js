const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/server.ts",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-bundle.js",
  },
  target:'node', // This is important to tell webpack to compile for node
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
//   plugins: [
//     new CopyWebpackPlugin([
//       {
//         from: './html',
//       }
//     ]),
//   ],
};