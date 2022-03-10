const withImages = require("next-images");
const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
  esModule: true,

  assetPrefix: isProd ? '/portifolio.curriculo.nextjs/' : '',

  images: {
    loader: 'akamai',
    path: '',
  },
});
