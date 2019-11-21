const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  plugins: [new FaviconsWebpackPlugin("./public/favicon.png")]
};
