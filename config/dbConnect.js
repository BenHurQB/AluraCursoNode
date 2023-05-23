import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Ben:Ben123@ben.qh77mo0.mongodb.net/BancoLivros");

let db = mongoose.connection;

export default db;