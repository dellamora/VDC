/* eslint-disable @typescript-eslint/no-unused-vars */
import { MongoClient } from "mongodb";

import MongoDBInterface from "./mongo";

const MONGODB_URI = process.env.mongo_db_url;
const MONGODB_DB = process.env.DB_NAME;

let cachedClient = null;
let cachedDb = null;

export default async function connectToDatabase(): Promise<MongoDBInterface> {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // Connect to cluster
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db("commerce");

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
