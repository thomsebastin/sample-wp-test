const path = require('path');
const webpack = require('webpack');
const COMMON_SRC_DIR = __dirname + '/common.src';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        common: COMMON_SRC_DIR + '/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/react',
                            '@babel/preset-env'
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-object-rest-spread"
                          ]
                    },
                },
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
    ],
    stats: {}
};
