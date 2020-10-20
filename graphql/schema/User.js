exports.types = `
    type User {
        id: ID
        email: String
        userName: String
        createdAt: String
        deletedAt: String
        token: String
    }
    
    input UserInput {
        email: String!
        userName: String
        password: String!
        person: ID
    }
`;

exports.queries = `
    getUsers : [User]
`;

exports.mutations = `
    insertUser( input : UserInput ): User
    authUser( input : UserInput ): User
`;


