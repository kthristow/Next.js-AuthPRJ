import {MongoClient} from 'mongodb'

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://kthristow:NwxXNyEFW4kft1TO@cluster0.00exydu.mongodb.net/auth-demo?retryWrites=true&w=majority');

    return client;
}