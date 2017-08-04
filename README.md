# webpack3
Webpack 3 step by step set up along with babel and ReactJs.

## Setting up Babel


**Babel config:**

This recipe enables you to set up the babel compiler to use the latest JS features.
Instead of using babel-preset-2015/6/7 I use babel-preset-env which allows me to use a single module that takes care of any feature used for development.
For a more detailed explanation follow this [excelent post](http://2ality.com/2017/02/babel-preset-env.html).
With this configuration it is not necessary to include a .babelrc file since that can be added directly to the babel loader configuration and if any file named .babelrc is already there the babelrc:false setting will diabled it.
