const jobService = require('../../services/jobService');

const jobResolver = {
    Query: {
        getJobs : async (_, { input }) => {
            return await jobService.getJobs(input);
        },
        getJobById: async (_, { id }) => {
            return await jobService.getJobById(id);
        }
    },
    Mutation: {
        insertJob : async (_, { input }) => {
            return await jobService.insertJob(input);
        }
    }
}

module.exports = jobResolver;