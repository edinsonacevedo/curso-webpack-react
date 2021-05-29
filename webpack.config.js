const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js', //punto de entrada
    output:  { //Archivo de salida
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    resolve: { //Extensiones que se van a resolver
        extensions: ['.js', '.jsx'],
        alias: { //alias para mejorar imports
            '@components': path.resolve(__dirname, 'src/components/'),
            "@styles": path.resolve(__dirname, "src/styles/")
        }
    },
    module: { //reglas
        rules: [
            { //Traspilar js y jsx
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { //Traspilar html
                test: /\.html$/,
                use: "html-loader"
            },
            { //Loader de estilos sass
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //plugin de html
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({ //Plugin css
            filename: "[name].css"
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(), //optimizar css
            new TerserPlugin() //optimizar JavaScript
        ]
    }
}