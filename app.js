const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./schema");

// Constants
const URL = "mongodb://localhost:27017/gastant0";

// Connect to MongoDB.
const connect = mongoose.connect(URL, { useNewUrlParser: true });
connect.then(
  db => {
    console.log("Connected correctly to server!");
  },
  err => {
    console.log(err);
  }
);

// Creating apollo server.
const server = new ApolloServer({
  schema: schema
});

// Creating express app.
const app = express();

// Applying middelware to application.
app.use(bodyParser.json());
app.use("*", cors());

// Connecting express app with apollo.
server.applyMiddleware({ app });

// Start Server.
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);


  //https://medium.com/better-programming/a-simple-crud-app-using-graphql-nodejs-mongodb-78319908f563