exports.types = `
    type Dynamic {
        size: Int
    }

    input DynamicInput {
        model: String!
    }
`;

exports.queries = `
    getTotalRows(input: DynamicInput) : Dynamic
`;

exports.mutations = `
`;