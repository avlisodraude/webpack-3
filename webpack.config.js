const path = require('path');

const config = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            [
                                "env",
                                {
                                    "modules": false,
                                    "targets": {
                                        "browsers": ["last 2 versions", "ie >= 9"]
                                    }
                                }
                            ]
                        ]

                    }
                }
            }

        ]
    }

};

module.exports = config;