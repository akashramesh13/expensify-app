const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  const isProduction = env && env.production === "true";

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "dist"), // Final output folder
      filename: "bundle.js",
      publicPath: "/expensify-app/", // Must match GitHub repo name
    },
    mode: isProduction ? "production" : "development",
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
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Image support
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]", // Output to 'dist/images/'
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // Uses your existing HTML file
        filename: "index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
            to: "dist",
            globOptions: { ignore: ["**/index.html"] },
          }, // Copy all except index.html
        ],
      }),
    ],
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      historyApiFallback: true,
      static: path.join(__dirname, "public"),
    },
  };
};
