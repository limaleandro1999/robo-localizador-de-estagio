var express = require('express');
var schedule = require('node-schedule');
var localizadorDeEstagio = require('./internshipFinder');

var app = express();
var port = process.env.PORT || '3000';

app.listen(port);
console.log('Servidor rodando!');

var j = schedule.scheduleJob('40 12 * * 0,1-5', function(){
    localizadorDeEstagio();
});

var k = schedule.scheduleJob('/1 * * * * 0,1-5', function(){
    var date = new Date();
    console.log(date.getHours() + ':' + date.getMinutes());
});