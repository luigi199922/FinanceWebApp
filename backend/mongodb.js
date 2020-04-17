const { MongoClient } = require("mongodb");
const assert = require("assert")
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "finance-api";

// Create a new MongoClient
const client = new MongoClient(connectionURL);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(databaseName);

  client.close();
});
