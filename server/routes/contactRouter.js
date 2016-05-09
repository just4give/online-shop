var express = require('express');
var router = express.Router();
var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(config.smtp);
var Client = require('node-rest-client').Client;


router.post('/byemail', function(req,res,next){

  var captchaResponse = req.body.captcha;
  console.log("Received captcha ", captchaResponse);

  var client = new Client();


  client.post("https://profile.google.com/recaptcha/api/siteverify?secret="+process.env.CAPTCHA_SECRET+"&response="+captchaResponse, {}, function (data, response) {
        if(data.success){
            var htmlContent = "<table border='1'><tr><td>Recipient Email:</td><td>"+req.body.inputEmail+ "</td></tr>" +
                "<tr><td>Email Subject:</td><td>"+req.body.inputSubject+ "</td></tr>"+
                "<tr><td>Message:</td><td>"+req.body.inputMessage+ "</td></tr>"
            "</table>";

            var htmlContent2="<p>Thanks for writing to us. We have received your email and will respond back within 24 hours.</p>"+
                "<br>"+
                "<a href='http://appstacksolutions.com'>Visit Us</a>";

            transporter.sendMail({from: req.body.inputEmail, to: config.adminEmail, subject:"Contact US", html:htmlContent  }, function(error, info){
                if(error){
                    console.log(error);
                    res.json({success:false,'message':'Could not send mail. Try again.'});
                }
                transporter.sendMail({from: config.adminEmail, to: req.body.inputEmail, subject:"We heard you", html:htmlContent2  }, function(error, info){

                });
                res.json({success:true,'message':'Your email was sent successfully'});
            });
        }else{
            console.log(data);
            res.json({success:false,'message':'Invalid captcha'});
        }
  });



});
module.exports = router;
