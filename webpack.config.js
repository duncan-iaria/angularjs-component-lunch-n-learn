const path = require( 'path' );

module.exports =
{
    entry: './app/app.js',

    output:
    {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'app/dist' )
    },

    module:
    {
        rules:
        [
            //HTML BUILD
            {
                test: /\.html$/,
                use: [ 'html-loader' ]
            },
            //CSS BUILD
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //SASS BUILD
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            //BABEL
            {
                test: /\.js$/,
                exclude: /node_modules/,
                
                use:
                {
                    loader: 'babel-loader',
                    options: { presets: [ 'env' ] }
                }
            },
            //FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 'file-loader' ]
            }
        ]
    }
};