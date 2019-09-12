const path = require('path')

module.exports = {
    port: process.env.PORT || 3000,
    sass: {
        src: path.join(__dirname, 'server/sass'),
        dest: path.join(__dirname, 'public/css'),
        outputStyle: 'compressed',
        indentedSyntax: false,
        prefix: '/css',
        debug: true,
        sourceMap: true
    }
}