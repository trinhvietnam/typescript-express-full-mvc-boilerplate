import {error} from "util";
/**
 * Created by NamTV on 3/15/2017.
 */
var Promise = require("bluebird");
var ConnectRoles = require('connect-roles-2');
var connectRoles = new ConnectRoles({
    failureHandler: function (req, res, action) {
        // optional function to customise code that runs when
        // authorisation fails authorisation
        console.log(req.originalUrl,req.roleError);
        var accept = req.headers.accept || '';
        res.status(403);
        if (~accept.indexOf('html')) {
            res.render('denied', {action: action,uri:req.header('uri')});
        } else {
            var error = req.roleError;
            if(!error){
                error = {ec:'validation error'};
            }
            res.json({error:error});
        }
    },
    async : true
});
//Admin can do all, admin (super root) will check first to sure this user have highest permission
connectRoles.use(function (req) {
    console.log('44444444444444444444 ');
    return new Promise(function (resolve, reject) {
        if (req.session.isSuperRoot) {
            resolve(true);
        }else{
            resolve(null);
        }
    });
});

export default connectRoles;

