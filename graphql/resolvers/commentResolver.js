const commentService = require('../../services/commentService');
const tagService = require('../../services/tagService');

const commentResolver = {
    Query: {
        getQuestions : async (_, { input },context) => {
            if(!context.user) return null;
            return await commentService.getQuestions(input);
        },
        getTreeCommentsByQuestionId: async (_, { input }) => {
            return await commentService.getTreeCommentsByQuestionId(input,true);
        },
        getFirstLevelChildrenByParentId: async (_, { input }) => {
            return await commentService.getFirstLevelChildrenByParentId(input);
        }
    },
    Mutation: {
        insertComment : async (_, { input }) => {
            return await commentService.insertComment(input);
        },
        insertQuestionTag: async (_, { input }) => {
            return await tagService.insertQuestionTag(input);
        }
    }
}

module.exports = commentResolver;