const usersResolver = require("./usersResolver");
const newResolver = require("./newResolver");
const dynamicResolver = require("./dynamicResolver");
const jobResolver = require("./jobResolver");
const personResolver = require("./personResolver");
const commentResolver = require("./commentResolver");
const tagResolver = require("./tagResolver");
const questionTagResolver = require("./questionTagResolver");
const { merge } = require("lodash");

const resolvers = merge(
  {},
  usersResolver,
  newResolver,
  dynamicResolver,
  jobResolver,
  personResolver,
  commentResolver,
  tagResolver,
  questionTagResolver
);

module.exports = resolvers;
