const NODE_ENV = process.env.NODE_ENV;

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const config = require("./config");

const ELEMENT_UI_CSS = new ExtractTextWebpackPlugin({
    filename: 'css/theme.css',
    allChunks: true,
});

const DEFAULT_LESS = new ExtractTextWebpackPlugin({
    filename: 'css/theme-override.css',
    allChunks: true
})

const PROJECT_LESS = new ExtractTextWebpackPlugin({
    filename: 'css/[name].css',
    allChunks: true
})

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: ['vue', 'vuex', 'vue-router'],
        main: [path.join(__dirname, 'src/entry')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/web/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            path.join('node_modules')
        ],
        alias: {
            'vue': 'vue/dist/vue.js',
            'config': path.join(__dirname, 'config'),
            'components': path.join(__dirname, 'src/components'),
            'images': path.join(__dirname, 'src/images'),
            'lib': path.join(__dirname, 'src/lib'),
            'modules': path.join(__dirname, 'src/modules'),
            'pages': path.join(__dirname, 'src/pages'),
            'router': path.join(__dirname, 'src/router'),
            'store': path.join(__dirname, 'src/store'),
            'theme': path.join(__dirname, 'src/theme')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules|config|mock/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.(woff|svg|ttf|eot)$/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: ELEMENT_UI_CSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                include: /src\/theme/,
                exclude: /node_modules/,
                loader: DEFAULT_LESS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)|(src\/theme)/,
                loader: PROJECT_LESS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({ // 公共代码提取
            name: ['vendor', 'runtime'],
            filename: 'js/[name].js',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            title: config.title,
            template: path.join(__dirname, 'src/views/template.html'),
            filename: 'index.html',
            // favicon: path.join(__dirname, 'src/views/favicon.ico'),
            inject: true,
            chunks: ['runtime', 'vendor', 'main'],
            minify: NODE_ENV == 'production' ? {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            } : false
        }),
        ELEMENT_UI_CSS,
        DEFAULT_LESS,
        PROJECT_LESS
    ].concat(NODE_ENV == 'production' ? [
        /**
         * 生产模式下的配置
         */
        new webpack.optimize.UglifyJsPlugin({ // js代码压缩
            compress: {
                warnings: false
            }
        }),
        new OptimizeCssAssetsWebpackPlugin({ // css代码压缩
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ] : [])
}