const withSvgr = require("next-svgr");

module.exports = withSvgr({
    images: {
        loader: 'akamai',
        path: '',
    },
});