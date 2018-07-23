# react-webpack-boilerplate
A ready to use simple webpack boilerplate.

# option1:
1.Clone this repo
2.Run npm install
3.Run npm start, localhost:8080 will open up in your default browser

# option2, manual installations/configuration:
npm init -y
npm i react react-dom prop-types -S
npm i babel-core babel-loader babel-preset-env babel-preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server -D

# update scripts in the package json
"start": "webpack-dev-server --mode development --open",
"build": "webpack --mode production"

#Create .babelrc
{
  "presets": ["env", "react"]
}

# Create webpack.config.js

npm i jest babel-jest enzyme enzyme-adapter-react-16

# create jest config file

