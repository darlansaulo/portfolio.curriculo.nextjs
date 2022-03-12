const isProd = process.env.NODE_ENV === 'production'

const withSvgr = require("next-svgr");

module.exports = withSvgr({

    reactStrictMode: true,

    assetPrefix: isProd ? '/portfolio.curriculo.nextjs/' : '',

    images: {
        loader: 'akamai',
        path: '',
    },
});