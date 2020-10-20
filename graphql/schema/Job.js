exports.types = `
    type Job {
        title: String
        description: String
        urlImage: String
        url: String
        postDate : String
        createdAt : String
        deletedAt : String
    }

    input JobPaginationInput {
        page: Int!
        limit : Int!
    }

    input JobInput {
        title: String!
        description: String!
        urlImage: String!
        url: String!
        postDate : String!
    }
`;

exports.queries = `
    getJobs(input: JobPaginationInput) : [Job]
    getJobById(id: ID!): Job
`;

exports.mutations = `
    insertJob(input: JobInput) : Job
`;