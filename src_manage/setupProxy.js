const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/user', {
        target: 'http://localhost:8081',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/user": "/"
        },
    }));
    app.use(proxy('/exam', {
        target: 'http://localhost:8501',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/exam": "/"
        },
    }));
}