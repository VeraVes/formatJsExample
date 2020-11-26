const presets = [
  [
    '@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
  '@babel/preset-react'
]
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  [
    'react-intl',
    {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
      extractFromFormatMessageCall: true,
      ast: true
    }
  ]
]

module.exports = {
  presets,
  plugins
}
