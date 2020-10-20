const { ApolloServer,makeExecutableSchema } = require('apollo-server-express');

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const { getUserInfo } = require('./middlewares/authentication');

const schemaApollo = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

const serverApollo = new ApolloServer({
  schema: schemaApollo,
  context: ({ req ,res }) => {
    const accessToken = req.headers.authorization.split(" ")[1];
    if(accessToken != 'undefined'){
      return  { user: getUserInfo(accessToken) } 
    }
    return { user: null };
  }
});

module.exports = serverApollo;
