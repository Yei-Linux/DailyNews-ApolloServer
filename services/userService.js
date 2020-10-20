const User = require("../models/User");
const bcryptjs = require('bcryptjs');

exports.getUsers = async () => {
  return await User.find();
};

exports.insertUser = async userRequest => {
  try {
    const user = new User(userRequest);
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password,salt);
    return await user.save();
  } catch (error) {
     throw new Error(error);
  }
};

exports.isValidUser = async ({email,password})=>{
  let userFound = await User.findOne({email}); 
  if(!userFound)  throw new Error('email');

  const isCorrect = await bcryptjs.compare(password,userFound.password);
  if(!isCorrect)  throw new Error('password');
  return userFound;
}

exports.getUserByProviderId = async providerId => {
  return await User.findOne({ providerId });
};
