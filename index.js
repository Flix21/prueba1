var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res){
        res.json({ mensaje: 'Un ejemplo de nodejs, express y Heroku'});
        });

app.listen(app.get('port'));
