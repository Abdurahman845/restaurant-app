
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://omerabdurahman4:dpbokkTOVmrksvsS@cluster0.okbzf84.mongodb.net/";
const client = new MongoClient(url, {})

const express = require('express');
const app = express();
console.log("App listen at port 5000");
app.use(express.json());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://localhost:5000

    // If you see App is working means
    // backend working properly
});

app.get("/orders/burgers", async (req, resp) => {
    let orders =await client.db("restaurant").collection("orders").insertOne({ name: "burger", price: "£15" })
    resp.send({message:"Burger has been ordered"});

});

app.get("/orders/pizzas", async (req, resp) => {
    let orders = await client.db("restaurant").collection("orders").insertOne({ name: "pizzas", price: "£25" })
    resp.send({message:"pizza has now been ordered"});

});
app.get("/orders/shawarma", async (req, resp) => {
    let orders = await client.db("restaurant").collection("orders").insertOne({ name: "shawarma", price: "£35" })
    resp.send({message:"shawarma has now been ordered"});
});

app.get("/orders", async (req, resp) => {
    let orders = await client.db("restaurant").collection("orders").find().toArray()
    resp.send(orders);
});


app.listen(5000);
