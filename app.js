var express = require('express');
var schedule = require('node-schedule');
var localizadorDeEstagio = require('./internshipFinder');

var app = express();
var port = process.env.PORT || '3000';

app.listen(port);
console.log('Servidor rodando!');

var j = schedule.scheduleJob('40 9 * * 0,1-5', function(){
    localizadorDeEstagio();
});