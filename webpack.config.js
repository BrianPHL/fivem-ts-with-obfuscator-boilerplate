const path = require( 'path' )
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const WebpackObfuscator = require('webpack-obfuscator');

const buildPath = path.resolve( __dirname, 'dist' );

const client = () => ({
    entry: './src/client/app.ts',
    output: {
        path: path.resolve( buildPath ),
        filename: 'bundle.client.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ 'ts-loader' ],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new WebpackObfuscator({ rotateStringArray: true })
    ],
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
})

const server = () => ({
    entry: './src/server/app.ts',
    output: {
        path: path.resolve( buildPath ),
        filename: 'bundle.server.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ 'ts-loader' ],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackObfuscator({ rotateStringArray: true })
    ],
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    }
})

const interface = () => ({
    entry: './src/interface/app.ts',
    output: {
        path: path.resolve( buildPath ),
        filename: 'bundle.interface.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ 'ts-loader' ],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackObfuscator({ rotateStringArray: true })
    ],
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.ts', '.js' ],
    }
})

module.exports = [ client, server, interface ]