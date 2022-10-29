const express = require('express');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server');
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI

const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

