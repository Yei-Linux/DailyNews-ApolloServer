const newService = require('../../services/newService');

const newResolver = {
    Query: {
        getNews : async (_, { input }) => {
            return await newService.getNews(input);
        },
        getNewById: async (_, { id }) => {
            return await newService.getNewById(id);
        }
    },
    Mutation: {
        insertNew : async (_, { input }) => {
            return await newService.insertNew(input);
        }
    }
}

module.exports = newResolver;