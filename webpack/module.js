module.exports = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(jpe?g|png|gif|webp)$/,
            use: {
                loader: "url-loader"
            }
        }
    ]
}