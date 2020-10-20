const jwt = require("jsonwebtoken");

exports.generateToken = (id, displayName, emailValue, avatarValue) => {
  return jwt.sign(
    { user: { id, displayName, emailValue, avatarValue } },
    process.env.SECRET,
    {
      expiresIn: "7days"
    }
  );
};
