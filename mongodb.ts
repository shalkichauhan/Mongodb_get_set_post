
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/';
const databaseName = 'user'

export async function getDetailsFromMongodbDatabase(inputForMongoDB) {

    try {

        const client = await MongoClient.connect(url);

        const db = await client.db(databaseName)

        const userData = await db.collection('user_details').find({'_originalEmail':inputForMongoDB}).toArray()

        console.log(userData[0].properties.senseiToken)


    }catch(error){
        console.log(error)
    }

}

