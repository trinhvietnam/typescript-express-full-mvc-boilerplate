/**
 * Created by NamTV on 3/28/2017.
 */

import connectRoles from "./ConnectRoles";
import {Logger} from "../../utities/Logger";
var Promise = require('bluebird');
var log = Logger.getNewLogger(__filename);
export const PATH = {
    DETAIL_ACCOUNT: '/:id',
    UPDATE_ACCOUNT: '/:id/update',
    UPDATE_ACCOUNT_PARAMS: {
        id: 'id'
    }
};
export const ACTION = {
    VIEW_DETAIL: 'VIEW_DETAIL',
    UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
};


connectRoles.use(ACTION.UPDATE_ACCOUNT, PATH.UPDATE_ACCOUNT, function (req) {
    return new Promise(function (resolve, reject) {
        /*
        * Check role in here
        * call resolve(true) if ok
        * call resolve(false)  if haven't role
        * call(null) to next
        * */
    });
});



connectRoles.use(ACTION.VIEW_DETAIL, PATH.DETAIL_ACCOUNT, function (req) {
    return new Promise(function (resolve, reject) {
        resolve(true);
    });

});

export const accountRoles = connectRoles;
