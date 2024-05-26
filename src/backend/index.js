// import { MongoClient } from 'mongodb';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://omerabdurahman4:dpbokkTOVmrksvsS@cluster0.okbzf84.mongodb.net/";
const client = new MongoClient(url, {})

console.log("code run")

let orders = client.db("restaurant").collection("orders").insertOne({ name: "burger", price: "£15" })
console.log("code complete")

// MongoClient.connect(url, function(err, db) {
//     console.log("mongo client connected")
//     if (err) throw err;
//   var dbo = db.db("restaurant");
//   var myobj = { name: "burger", price: "£15" };
//   dbo.collection("orders").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
