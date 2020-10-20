exports.types = `
    type Tag {
        _id: ID
        name: String
        color: String
        createdAt: String
        deletedAt: String
    }
    
    input TagInput {
        name: String!
        color: String!
    }
`;

exports.queries = `
    getTags : [Tag]
`;

exports.mutations = `
    insertTag( input : TagInput ): Tag
`;
