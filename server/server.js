const express = require('express');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once("open", () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(
          `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        );
      });
    });
  };
  
startApolloServer(typeDefs, resolvers);

