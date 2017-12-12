const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        home:      './client/containers/HomePage/HomePage.js',
        tips:      './client/containers/TipsPage/TipsPage.js',
        events:    './client/containers/EventsPage/EventsPage.js',
        resources: './client/containers/ResourcesPage/ResourcesPage.js',
        gallery:   './client/containers/GalleryPage/GalleryPage.js',
        login:     './client/containers/LoginPage/LoginPage.js',
        signup:    './client/containers/SignupPage/SignupPage.js',
        about:     './client/containers/AboutPage/AboutPage.js',
        credits:   './client/containers/CreditsPage/CreditsPage.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
};
