const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //punto de entrada
    output:  { //Archivo de salida
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: { //Extensiones que se van a resolver
        extensions: ['.js', '.jsx']
    },
    mode: "development",
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
        })
    ],
    devServer: { //Servidor de desarrollo
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006
    }
}