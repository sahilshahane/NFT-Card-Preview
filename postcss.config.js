const isDev = process.env.NODE_ENV === 'development'

const developmentConfig = { tailwindcss: {} }

const productionConfig = {
  'postcss-flexbugs-fixes': {},
  tailwindcss: {},
  'postcss-preset-env': {
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 3,
    features: {
      'custom-properties': false,
    },
  },
}

module.exports = {
  plugins: isDev ? developmentConfig : productionConfig,
}
