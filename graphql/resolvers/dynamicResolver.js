const dynamicService = require('../../services/dynamicService');

const dynamicResolver = {
    Query: {
        getTotalRows : async (_, { input }) => {
            return await dynamicService.getTotalRows(input);
        }
    },
    Mutation: {}
}

module.exports = dynamicResolver;