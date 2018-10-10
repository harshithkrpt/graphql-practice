const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const app = express();

// allow cross origin request
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// connext to mongoose
mongoose.connect(
  config,
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Coone");
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
