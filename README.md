# webpack 3
Webpack 3 step by step set up along with babel and ReactJs.

## Purpose of this recipe
To set up Webpack 3 to handle SASS  

**Requirements:**
- css-loader
- node-sass
- sass-loader 
- style-loader

On the Webpack.config file, within the module.rules objects include:

 {
 
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
 }
 
 Note: The order is importsant since webpack run the loader from right to left.
