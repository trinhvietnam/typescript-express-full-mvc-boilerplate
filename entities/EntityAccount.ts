import * as e from "express";
/**
 * Created by NamTV on 5/25/2017.
 */
export class EntityAccount{
    email:string;
    password:string;
    name:string;
    age:number;
    constructor(email,name,age,password){
        this.email = email;
        this.name = name;
        this.age = age;
        this.password = password;
    }
}