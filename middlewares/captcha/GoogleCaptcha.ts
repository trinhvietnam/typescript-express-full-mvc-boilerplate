/**
 * Created by nam on 5/21/2017.
 */
var request = require('request');
module.exports = function(options) {
    return function(req, res, next) {
        if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
            return res.json(req, res,{ec:'Captcha is empty'}, null);
        }
        // Put your secret key here.
        var secretKey = "6LdVUCIUAAAAAD2kAjhEVzPTrEh4m9oI9TcmiXHU";
        // req.connection.remoteAddress will provide IP address of connected user.
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
        // Hitting GET request to the URL, Google will respond with success or error scenario.
        request(verificationUrl, function (error, response, body) {
            body = JSON.parse(body);
            // Success will be true or false depending upon captcha validation.
            if (body.success !== undefined && !body.success) {
                return res.json(req, res,{ec:'Captcha error'}, null);
            } else {
                next();
            }
        });
    }
};