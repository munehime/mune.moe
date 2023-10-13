import { MongoClient } from 'mongodb';
import { MONGO_URI } from '$env/static/private';

const client = new MongoClient(MONGO_URI);

export async function connect(): Promise<void> {
	await client.connect();
}

export async function disconnect(): Promise<void> {
	await client.close();
}

export default client.db();
