// import needed packages
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes/routes.js');

// --------- Remove this section in production mode ------------------ //
if (process.env.NODE_ENV !== 'production') {
    // Tell express to use the webpack-dev-middleware and use the webpack.dev.js
    // configuration file as a base if in dev mode
    const webpack = require('webpack');
    const webpackDevMiddleWare = require('webpack-dev-middleware');
    const config = require('./webpack.dev.js');
    const compiler = webpack(config);

    app.use(webpackDevMiddleWare(compiler, {
        publicPath: config.output.publicPath,
        stats: { colors: true }
    }));
}
// ------------------------------------------------------------------- //


// configure app to use bodyParser
// this will allow us to get the data from a POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define a port for the server to run on
const port = process.env.PORT || 3000;

// configure views directory and set up template engineer
app.set('views', './server/views');
app.set('view engine', 'pug');

// setup static routes
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'server', 'src')));

// retrieve routes
app.use('/', routes);

app.listen(port, () => {
    console.log('Express server started on port: ' + port + '.');
});
