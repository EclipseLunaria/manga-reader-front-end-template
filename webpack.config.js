const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
    rules: [
        {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        },
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192, // Converts images < 8kb to base64 strings
                  name: 'images/[name].[hash].[ext]'
                }
              }
            ]
          },
    ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    ],
};