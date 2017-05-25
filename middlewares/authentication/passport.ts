import {Logger} from "../../utities/Logger";
import {ModelAccount} from "../../models/ModelAccount";
import {EntityAccount} from "../../entities/EntityAccount";
/**
 * Created by NamTV on 3/16/2017.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var log = Logger.getNewLogger(__filename);
var mAccount = new ModelAccount();
export const passportConfig = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {
        mAccount.getAccountByEmail(email)
            .then((account: EntityAccount) => {
                if (account && account.password == password){
                    return done(null, account);
                }else{
                    done({ec:'Password is wrong'});
                }

            })
            .catch((error) => {
                return done(error);
            })
        // return done(null, {username,password});
    }));
};

