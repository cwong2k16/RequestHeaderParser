var express = require('express');
var app = express();

app.get('/', function(req, res){
    var acceptLang = req.headers['accept-language'];
    var parsedLang = acceptLang.split(',');

    var userAgent = req.headers['user-agent'];
    var parsedOS = userAgent.split('(');
    parsedOS = parsedOS[1].split(')');

    var ip = req.headers['x-forwarded-for'];
    ip = ip.split(',');
    ip = ip[0];

    var parsedJSON = {
        ipaddress: ip,
        language: parsedLang[0],
        software: parsedOS[0]
    }
    res.send(parsedJSON);
});

app.listen('3000');