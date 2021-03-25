const chalk = require("chalk");
const env = process.env.NODE_ENV;

console.log(chalk.yellow(`环境运行:`, env));

module.exports = () => {
  const config = {
    // publicPath: "/openpaas/",
    outputDir: "static/",
    assetsDir: "build",
    devServer: {
    //   port: 9090,
    },
    // Spa多页面路由处理
    pages: {
      home: {
        // page 的入口
        entry: "src/main.js",
        // 模板来源
        template: "public/index.html",
        // 在 dist/index.html 的输出
        filename: "home.html",
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: "Home Page",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        // chunks: ["chunk-vendors", "chunk-common"], //这里使用了chunk发现有问题，内容出不来
      },
      page: {
        entry: "src/page.js",
        template: "public/page.html",
        filename: "page.html",
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/other.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `other.html`。
      other: {
        entry: "src/other.js",
        template: "public/page.html",
      },
    },
  };
  return config;
};
