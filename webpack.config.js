module.exports = {
    module: {
        rules: [
            //配置babel，自动编译es6语法
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss?$/,
                loaders: ["style", "css", "sass"]
            }

        ]
    },
}
