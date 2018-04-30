const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var opn = require('opn');

const app = express();
const config = require('./webpack.config.js')({production: false});
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port 3000.
app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});

opn('http://localhost:8080/')