const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// Connect DB
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Now listening for equest on port 4000');
});
