const path = require("path");

module.exports = (env) => {
  const isProduction = env.production === "true";
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, ".build"),
      filename: "bundle.js",
      publicPath: "/.build/",
    },
    mode: "development",
    module: {
      rules: [
        {
          use: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"],
          test: /\.s?css$/,
        },
      ],
    },
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      historyApiFallback: true,
      static: path.join(__dirname, "public"),
    },
  };
};
