module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tamagotchi/'
    : '/',
  devServer: {
    disableHostCheck: true
  }
}