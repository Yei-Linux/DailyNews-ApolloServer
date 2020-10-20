const jwt = require("jsonwebtoken");

exports.getUserInfo = (parsedToken) => {
  try {
    const tokenDecoded = jwt.verify(parsedToken, process.env.SECRET);
    return tokenDecoded.user;
  } catch (error) {
    return null;
  }
};
