import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mongo-alura:teste123@cluster0.pycuo.mongodb.net/alura-nodejs");


let db = mongoose.connection;

export default db;