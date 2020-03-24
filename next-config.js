require("dotenv").config();
const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 65
            }
          }
        }]
    });

    if (!options.isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config;
  },
  env: {
    API_KEY_ANALITYCS: '',
    KEY_TAGMANAGER: 'GTM-PMJJ4L',
    KEY_FB_ID: '515489081827966',
    KEY_FB_PAGE: '136575266391957',
    SITE_DOMAIN_URL: 'https://aweita.larepublica.pe/',
    SITE_TWITTER: 'https://twitter.com/aweita_pe',
    SITE_TWITTER_ACCOUNT: 'aweita_pe',
    SITE_INSTAGRAM: 'https://www.instagram.com/aweita_tv',
    SITE_YOUTUBE: null,
    SITE_FACEBOOK: 'https://www.facebook.com/aweita/',
    KEY_CXENSE: '1138546373957457574',
    API_TOOLS_BASE: 'https://apitools.glr.pe/',
    API_KEY_CHARBEAT: '075f4393563999dd5ec07e1c36c29707',
    TOKEN_GRAPHQL: '5e335e19cd721c2ec90a5b42',
    CNAME_CRONOS_QA: 'https://qapresmedia.elpopular.pe',
    CNAME_CRONOS: 'https://imgmedia.elpopular.pe',
  },
  exportTrailingSlash: true,
}));
