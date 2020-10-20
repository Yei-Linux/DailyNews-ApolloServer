exports.types = `
    type Person {
        _id: ID
        name: String
        lastName: String
        motherLastName: String
        phone: String
        createdAt : String
        deletedAt : String
    }

    input PersonInput {
        name: String!
        lastName: String!
        motherLastName: String!
        phone: String!
    }
`;

exports.queries = `
`;

exports.mutations = `
    insertPerson(input: PersonInput) : Person
`;
