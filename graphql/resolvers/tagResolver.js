const tagService = require("../../services/tagService");

const tagResolver = {
  Query: {
    getTags: async (_, {}) => {
      return await tagService.getTags();
    }
  },
  Mutation: {
    insertTag: async (_, { input }) => {
      return await tagService.insertTag(input);
    }
  }
};

module.exports = tagResolver;
