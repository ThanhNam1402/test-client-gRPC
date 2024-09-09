const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true, // Clean the output directory before each build
        publicPath: 'https://abc.com' // The base URL for all assets within the application
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        },
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.scss',
            '.png',
            '.svg',
            '.jpg',
            '.gif',
            '.eot',
            '.ttf',
            '.woff',
            '.woff2',
            '.jpeg',
            '.bmp',
            '.webp',
            '.ico'
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'rmTest',
            filename: 'remoteEntry.js',
            exposes: {
                './TestRemote': './src/TestRemote'
            },
            remotes: {
                bySharingHost: 'bySharingHost@https://bysharing.org/remoteEntry.js'
            },
            shared: {
                ...require('./package.json').dependencies,
                react: { singleton: true, requiredVersion: require('./package.json').dependencies.react },
                'react-dom': { singleton: true, requiredVersion: require('./package.json').dependencies['react-dom'] }
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        rules: [
            // Import TS/JS/TSX/JSX
            {
                test: /\.(ts|tsx|js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            // SCSS
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            // Import SCSS Modules
            {
                test: /\.module\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: '[hash:base64]'
                            },
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // Import Images
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[contenthash:6][ext]'
                }
            },
            // Import Fonts
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[name].[contenthash:6][ext]'
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            '...' // Extend the default minimizers (e.g., TerserPlugin)
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'source-map' // Different source map for production
}
