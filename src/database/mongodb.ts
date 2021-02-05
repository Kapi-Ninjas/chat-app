import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'

dotenv.config();

const db_uri = process.env.DB_URI;

let Client: MongoClient;

MongoClient.connect(db_uri as string, {
    useUnifiedTopology: true
}).then(connection =>
    Client = connection
);

export { Client };