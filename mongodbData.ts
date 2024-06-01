const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/';

const databaseName = 'user'

export async function getUserData(parameter:string) {

    try {
        const client = await MongoClient.connect(url);

        const db =  client.db(databaseName)


       const userData =  await db.collection('user_details').find({'email':parameter}).toArray()

        return userData;

    }catch(error){
        console.log(error)
    }

}

