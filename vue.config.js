module.exports = {
    devServer: {
        port: 3000,
        disableHostCheck: true,
        proxy: {
            "/users": {
                target: 'http://gin_container:8080',
                ws: true,
                logLevel: 'debug'
            }
        }
    }
};