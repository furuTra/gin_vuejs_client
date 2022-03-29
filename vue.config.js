module.exports = {
    devServer: {
        port: 3000,
        allowedHosts: 'all',
        proxy: {
            "/users": {
                target: 'http://gin_container:8080',
                ws: true,
                logLevel: 'debug'
            }
        }
    }
};