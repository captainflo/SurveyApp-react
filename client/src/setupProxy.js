const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:3001' }));
    app.use(proxy(['/api', '/auth/instagram'], { target: 'http://localhost:3001' }));
}