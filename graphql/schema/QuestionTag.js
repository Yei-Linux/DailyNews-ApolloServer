exports.types = `
    type QuestionTag {
        _id: ID
        comment: ID
        tag: ID
        createdAt: String
        deletedAt: String
    }

    type MessageResponse {
        msg : String
    }

    input SpecialTagInput {
        _id: ID!
    }
    
    input QuestionTagInput {
        comment: ID!
        tags: [SpecialTagInput]
    }
`;

exports.queries = `
    getQuestionTags : [QuestionTag]
`;

exports.mutations = `
    insertQuestionTag( input : QuestionTagInput ): MessageResponse
`;
