// import {UserObject} from "./types";
//
// const mongodb = require('mongodb')
//
// const MongoClient = mongodb.MongoClient
//
// const url = 'mongodb://localhost:27017/';
//
// const databaseName = 'user'
//
// export async function getUserData(parameter:string[]) {
//
//     const client = await MongoClient.connect(url);
//
//     const db =  client.db(databaseName)
//
//     let validUserObject: UserObject[] =[]
//
//     for(let email of parameter){
//
//     try {
//        const userData =await db.collection('user_details').find({'email':email}).toArray()
//
//         if(userData.length>0){
//             validUserObject.push(userData[0])
//         }
//
//
//
//     }catch(error){
//         console.log(error)
//     }
//
// }
//     return validUserObject
// }
//

import {UserObject} from "./types";

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/'
const dataBaseName = 'user'

export async function getUserDataForMongobdChecks(userEnteredData:string[]):Promise<UserObject[] | string>{

    let arrayOfAllTheObjectsFoundInMongoDBDatabase =[]

    try{

        const client= await MongoClient.connect(url)
        const db = client.db(dataBaseName)


        for(let email of userEnteredData) {




            const dataReceivedByMongoDBfromManplateFile = await db.collection('user_details').find({'_originalEmail': email}).toArray()
                if(dataReceivedByMongoDBfromManplateFile.length!==0) {
                    arrayOfAllTheObjectsFoundInMongoDBDatabase.push(dataReceivedByMongoDBfromManplateFile[0])
                }else{
                    console.log("email is not found in MongoDB database")
                }

        }


     //  replicateduser100@example.com,replicateduser200@example.com

    }catch(error){

        console.log(error)
    }
    if(arrayOfAllTheObjectsFoundInMongoDBDatabase.length!==0){

    return arrayOfAllTheObjectsFoundInMongoDBDatabase}
    else{
        return "email doesn't exist"
    }
}
