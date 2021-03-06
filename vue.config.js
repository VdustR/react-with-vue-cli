module.exports = {
  baseUrl: process.env.BASE_URL || '/',
  configureWebpack: {
    entry: './src/index',
  },
  chainWebpack: (config) => {
    config.module
      .rule('babel')
      .test(/\.jsx?$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end();
  },
};
