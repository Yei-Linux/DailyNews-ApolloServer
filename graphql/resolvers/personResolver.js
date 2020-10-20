const personService = require("../../services/personService");

const personResolver = {
  Query: {},
  Mutation: {
    insertPerson: async (_, { input }) => {
      return await personService.insertPerson(input);
    }
  }
};

module.exports = personResolver;
