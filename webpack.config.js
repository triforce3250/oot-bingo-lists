// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/*.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "ootBingoLists.js",
    clean: true,
    library: "OotBingoLists",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
