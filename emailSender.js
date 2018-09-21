var nodemailer = require('nodemailer');
var dotenv = require('dotenv');

dotenv.config();

var settings = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
};

var transporter = nodemailer.createTransport(settings);

module.exports = function(html){
    const mailOptions = {
        from: process.env.EMAIL, // sender address
        to: 'limaleandro1999@gmail.com', // list of receivers
        subject: 'Vagas de Estágio', // Subject line
        html: html// plain text body
    };
    
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err.message);
        }else{
            console.log(info);
        }
    });
}