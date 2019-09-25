module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  context: __dirname, // 모듈 파일 폴더
  entry: {
    // 엔트리 파일 목록
    app: "./index.js"
  },
  output: {
    path: __dirname, // 번들 파일 폴더
    filename: "adminbundle.js" // 번들 파일 이름 규칙
  }
};
