import { MongoClient, Db } from "mongodb";

interface MongoDBInterface {
  client: MongoClient;
  db: Db;
}

export default MongoDBInterface;
