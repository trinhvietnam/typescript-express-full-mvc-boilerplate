/**
 * Created by nam on 3/11/2017.
 */

import {Logger} from "../utities/Logger";
import {DatabaseHelper} from "../databases/DatabaseHelper";
import {EntityAccount} from "../entities/EntityAccount";
var Promise = require("bluebird");
var log = Logger.getNewLogger(__filename);
/*
 * Do main task relative Acount
 * */
export class ModelAccount {

    public getAccountByEmail(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            var query = 'SELECT * FROM user WHERE email = ' + email;//that is example
            DatabaseHelper.query(query)
                .then((account: EntityAccount) => {
                    resolve(account);
                })
                .catch(reject);
        });
    }

    public getById(id: number) {
        return new Promise((resolve, reject) => {
            var query = 'SELECT * FROM user WHERE id = ' + id;//that is example
            DatabaseHelper.query(query)
                .then((account: EntityAccount) => {
                    resolve(account);
                })
                .catch(reject);
        });
    }

    public updateProperties(id, properties, userIdExcute) {
        return new Promise((resolve, result) => {
            //Do update by DatabaseHelper here
            resolve(true);
        })
    }
}


