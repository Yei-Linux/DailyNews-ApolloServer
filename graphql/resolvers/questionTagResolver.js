const questionTagService = require("../../services/questionTagService");

const questionTagResolver = {
  Query: {
    getQuestionTags: async (_, { }) => {
      return await questionTagService.getQuestionTags();
    }
  },
  Mutation: {
    insertQuestionTag: async (_, { input }) => {
      return await questionTagService.insertQuestionTag(input);
    }
  }
};

module.exports = questionTagResolver;
