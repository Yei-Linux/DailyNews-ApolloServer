exports.types = `
    type New {
        title: String
        description: String
        urlImage: String
        url: String
        postDate : String
        createdAt : String
        deletedAt : String
    }

    input NewPaginationInput {
        page: Int!
        limit : Int!
    } 

    input NewInput {
        title: String!
        description: String!
        urlImage: String!
        url: String!
        postDate : String!
    }
`;

exports.queries = `
    getNews(input: NewPaginationInput) : [New]
    getNewById(id: ID!): New
`;

exports.mutations = `
    insertNew(input: NewInput) : New
`;
