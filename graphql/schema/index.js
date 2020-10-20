const User = require('./User');
const New = require('./New');
const Dynamic = require('./Dynamic');
const Job = require('./Job');
const Person = require('./Person');
const Comment = require('./Comment');
const Tag = require('./Tag');
const QuestionTag = require('./QuestionTag');

const types = [];
const queries = [];
const mutations = [];

const schemas = [User,New,Dynamic,Job,Person,Comment,Tag,QuestionTag];

schemas.forEach( schema => {
    types.push(schema.types);
    queries.push(schema.queries);
    mutations.push(schema.mutations);
});

const generalSchema = `
    ${types.join('\n')}

    type Query {
        ${queries.join('\n')}
    }

    type Mutation {
        ${mutations.join('\n')}
    }
`;

module.exports = generalSchema;