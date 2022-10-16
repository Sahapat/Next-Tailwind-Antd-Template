const path = require('path');
const webpack = require('webpack');

const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const lessToJS = require('less-vars-to-js');
const fs = require('fs');

const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'src/styles/variables.less'), 'utf8'));

module.exports = withBundleAnalyzer(withAntdLess({
  async redirects() {
	  return [
	    {
	      source: '/',
	      destination: '/home',
	      permanent: true
	    }
	  ]
  },
  experimental: {
    outputStandalone: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });

    config.plugins.push(
      new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
        'THEME': { ...antdVariables },
      }),
    );

    return config;
  },
}));
