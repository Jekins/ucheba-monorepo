const babelConfig = api => {
  api.cache(true)

  const presets = [
    'next/babel',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ]

  const plugins = [['styled-components', { ssr: true, fileName: true }]]

  return {
    presets,
    plugins,
  }
}

module.exports = babelConfig
