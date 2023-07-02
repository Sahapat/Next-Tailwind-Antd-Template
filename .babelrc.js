module.exports = {
  presets: [
    ['next/babel'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [['import', { libraryName: 'antd', style: true }]],
}
