const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
    entry: {index: path.resolve(__dirname, "src", "index.jsx")},
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
    new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        filename: './index.html',
        favicon: './public/favicon.ico'
    })
    ],
    devServer: {
        port: 8081
    }
}