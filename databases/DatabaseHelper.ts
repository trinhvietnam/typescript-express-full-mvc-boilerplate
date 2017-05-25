import {EntityAccount} from "../entities/EntityAccount";
/**
 * Created by NamTV on 5/25/2017.
 */
var Promise = require('bluebird');
export class DatabaseHelper {
    /*
     * Excute query database here
     * */
    public static query(query) {
        return new Promise((resolve, reject) => {
            var account = new EntityAccount('abc@gmail.com','abc',18,'password');
            resolve(account);
        })
    }
}