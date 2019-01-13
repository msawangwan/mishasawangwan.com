const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    let mode = env;

    if (mode === undefined) {
        mode = argv['mode'];
    }

    console.log(`Building for \u001b[32;1m${mode}\u001b[0m\n`);

    return {
        entry: {
            main: './src/routes/index.main.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {}
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: 'index.[name].bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'main',
                template: './src/routes/index.main.html',
                filename: 'index.html'
            })
        ],
        devServer: {
            contentBase: './dist',
            historyApiFallback: true
        }
    }
};