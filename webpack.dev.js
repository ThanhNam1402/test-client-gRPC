const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true, // Clean the output directory before each build
        publicPath: 'http://localhost:5000/' // The base URL for all assets within the application
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: false,
        port: 5000,
        historyApiFallback: true
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
            exposes: {},
            remotes: {},
            shared: {
                ...require('./package.json').dependencies,
                react: { singleton: true, requiredVersion: require('./package.json').dependencies.react },
                'react-dom': { singleton: true, requiredVersion: require('./package.json').dependencies['react-dom'] }
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: false
        }),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js', '.jsx']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
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
            // CSS
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
                                localIdentName: '[name]__[local]___[hash:base64:5]'
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
                    filename: '[path][name].[ext]'
                }
            },
            // Import Fonts
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name].[ext]'
                }
            }
        ]
    },
    devtool: 'eval-source-map'
}
