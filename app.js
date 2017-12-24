var express = require('express');
var app = express();

app.get('/', function(req, res){
    var acceptLang = req.headers['accept-language'];
    var parsedLang = acceptLang.split(',');
    console.log(parsedLang[0]);

    var userAgent = req.headers['user-agent'];
    var parsedOS = userAgent.split('(');
    parsedOS = parsedOS[1].split(')');
    console.log(parsedOS[0]);

    var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

    var parsedJSON = {
        ipaddress: ip,
        language: parsedLang[0],
        software: parsedOS[0]
    }
    res.send(parsedJSON);
});

app.listen('3000');