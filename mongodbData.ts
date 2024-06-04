import {UserObject} from "./types";

const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/';

const databaseName = 'user'

export async function getUserData(parameter:string[]) {

    const client = await MongoClient.connect(url);

    const db =  client.db(databaseName)

    let validUserObject: UserObject[] =[]

    for(let email of parameter){

    try {
       const userData =await db.collection('user_details').find({'email':email}).toArray()

        if(userData.length>0){
            validUserObject.push(userData[0])
        }



    }catch(error){
        console.log(error)
    }

}
    return validUserObject
}

