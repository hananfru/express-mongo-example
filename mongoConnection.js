

import { MongoClient } from "mongodb";



export const client = new MongoClient(process.env.MONGO_URI);
export const db = client.db('test');

export async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to mongodb...')
    } catch (err) {
        console.log('Could not connect to mongo', err.message);
    }
}



// try{
//     await client.connect();
//     console.log('connected to mongodb');
// }

// const db = client.db('test');
// const collection = db.collection('users');

// await collection.findOne({_id: new ObjectId('69538e9c0da49d3047a0336d')})

// await collection.createIndex({username: 1}, {unique: true});
// await collection.insertOne({username: "Daniel"});
// const users = await collection.find({}).sort({username: -1}).toArray()

// await collection.findOneAndDelete({username: "Daniel"})

// const user = await collection.findOne({username: "Barak"})

// await client.close();
