const userService = require("../../services/userService");
const tokenHelper = require("../../helpers/tokenHelper");

const usersResolver = {
  Query: {
    getUsers: async (_, {}) => {
      return await userService.getUsers();
    }
  },
  Mutation: {
    insertUser: async (_, { input }) => {
      return await userService.insertUser(input);
    },
    authUser: async (_, { input }) => {
      try {
        let response = await userService.isValidUser(input);
        let { _id, email, userName } = response;
        let token = tokenHelper.generateToken(_id, email, userName, "");
        return { id: _id, email, userName, token };
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};

module.exports = usersResolver;
