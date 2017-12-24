var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json(req.headers);
    var acceptLang = req.headers['accept-language'];
    var parsedLang = acceptLang.split(',');
    console.log(parsedLang[0]);

    var userAgent = req.headers['user-agent'];
    var parsedOS = userAgent.split('(');
    parsedOS = parsedOS[1].split(')');
    console.log(parsedOS[0]);

    var ip = request.headers['x-forwarded-for'] ||
    request.connection.remoteAddress ||
    request.socket.remoteAddress ||
    request.connection.socket.remoteAddress;
    
});

app.listen('3000');