module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  context: __dirname + "/src/javascript", // 모듈 파일 폴더
  entry: {
    // 엔트리 파일 목록
    app: "./index.js"
  },
  output: {
    path: __dirname + "/src", // 번들 파일 폴더
    filename: "bundle.js" // 번들 파일 이름 규칙
  }
};
