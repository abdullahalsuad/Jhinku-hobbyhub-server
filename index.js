const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // database connection
    await client.connect();
    // const database = client.db("hobbyhubDB");
    // const userCollection = database.collection("");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Being API

    //* Get
    // app.get("/users", async (req, res) => {
    //   const cursor = userCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    //* POST - Add new
    // app.post("/users", async (req, res) => {
    //   console.log("Data received on server:", req.body);
    //   const newUser = req.body;
    //   const result = await userCollection.insertOne(newUser);
    //   res.send(result);
    // });

    //* Delete
    // app.delete("/users/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await userCollection.deleteOne(query);
    //   res.send(result);
    // });

    // End API
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
run().catch(console.dir);

// server
app.get("/", (req, res) => {
  res.send("Jhinku hobby hub server  in running");
});

app.listen(port, () => {
  console.log(`Jhinku-hobby hub server  in running on ${port}`);
});
