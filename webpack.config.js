// 'require' package is installed with webpack
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            // test for js files and translate all to ES5
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },

            // test for scss files and translate to css
            {
                test: /\.scss$/,

                // the ExtractTextPlugin uses this pattern where you will define the modules it uses 
                // in this case, it will run sass-loader, then css-loader, and then do it's configured
                // action above by extracting all the results to a 'main.css' file. 
                //
                // Because we are catching the full results of this rule then pushing them to a file, 
                // you can think of the ExtractPlugin as a wrapper (composition) of that
                //
                // NOTE: This is just the configuration for the ExtractTextPlugin - it is run on the bundle later
                use: extractPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        // This is specifying that the ExtractTextPlugin is to be run on the bundle
        extractPlugin
    ]
};