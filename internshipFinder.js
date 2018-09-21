var cheerio = require('cheerio');
var request = require('request');
var enviadorDeEmail = require('./emailSender');

module.exports = function(){
    request("http://queroworkar.com.br/blog/", function(err, response, body){
            
        const $ = cheerio.load(body);
        var valorClass = $('.jobs-post').find('.estagio');
        var html = '<h2>Estas são as vagas de estágio ativas do QueroWorkar!</h2><br>';
        
        for(var i = 0; i < valorClass.length; i++){
            html+= '<h3>' + valorClass[i].parent.parent.children[1].children[1].children[0].attribs.title + '</h3> <br>';
            html+= '<a href="' + valorClass[i].parent.parent.children[1].children[1].children[0].attribs.href + '">Clique para ver a vaga</a> <br><br>';
        }

        enviadorDeEmail(html);
    });
}
