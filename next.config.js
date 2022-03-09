const isProd = process.env.NODE_ENV === 'production'

module.exports = {

    assetPrefix: isProd ? '/portifolio.curriculo.nextjs/' : '',

    images: {
      loader: 'akamai',
      path: '',
    },
}
