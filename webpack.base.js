module.exports = {
    mode: 'none',
    // this will tell webpack to run Babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            presets: [
                                ["@babel/env", {
                                    "targets": {
                                        'browsers': ['last 7 versions']
                                    },
                                    "loose":true
                                }],"@babel/react"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            presets: [
                                ["@babel/env", {
                                    "targets": {
                                        'browsers': ['last 7 versions']
                                    },
                                    "loose":true
                                }],"@babel/react"
                            ]
                        }
                    }
                ]
            }
        ]
    }
}