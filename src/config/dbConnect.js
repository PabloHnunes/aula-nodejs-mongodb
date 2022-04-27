import mongoose from "mongoose";
import config from "config";

mongoose.connect(`mongodb+srv://${config.get('mongodb.organization')}:${config.get('mongodb.senha')}@cluster0.pycuo.mongodb.net/${config.get('mongodb.collection')}`);


let db = mongoose.connection;

export default db;