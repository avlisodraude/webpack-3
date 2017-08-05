const path = require('path');

const config = {
    entry: './src/scripts/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/scripts'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                "react",
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
                ]
            }
        ]
    }
};

module.exports = config;