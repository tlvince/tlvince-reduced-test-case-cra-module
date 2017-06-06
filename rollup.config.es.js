const pkg = require('./package.json')

export default {
  entry: 'index.js',
  dest: pkg.module,
  format: 'es',
  plugins: []
}
