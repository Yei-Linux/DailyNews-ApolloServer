exports.types = `
    type Comment {
        _id: ID
        comment: String
        description: String
        tags: [Tag]
        user : User 
        numberComments : Int
        parent: ID
        createdAt: String
    }

    type NumberComments {
        total: Int
    }
    
    input CommentInput {
        comment: String!
        description: String
        user: ID!
        parent: String
    }

    input CommentPaginationInput {
        page: Int!
        limit : Int!
    }

    input SearchInput {
        questionId: ID!
        skip: Int
        limit: Int
    }
`;

exports.queries = `
    getQuestions( input : CommentPaginationInput ) : [Comment]
    getTreeCommentsByQuestionId( input : SearchInput ) : [Comment]
    getFirstLevelChildrenByParentId(input : SearchInput) : NumberComments
`;

exports.mutations = `
    insertComment( input : CommentInput ): Comment
`;
