var fs = require('fs');
var connect = require('connect'), 
//https = require('https');
http = require('http');

// TODO: Use https
/*var options = {
    key:    fs.readFileSync('ssl/server.key'),
    cert:   fs.readFileSync('ssl/server.crt'),
    ca:     fs.readFileSync('ssl/ca.crt')
};*/

// Serve up static files
var app = connect().use(connect.static(__dirname));
http.createServer(app).listen(3000);

// TODO: Add route to POST high score to. Could fake saving it to DB.