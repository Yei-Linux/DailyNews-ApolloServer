const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

exports.socialAuth = async (req, res) => {
  const {
    id,
    displayName,
    emails: [{ value: emailValue }],
    photos: [{ value: avatarValue }]
  } = req.user;

  try {
    let user = await userService.getUserByProviderId(id);
    let token;

    if (user == null) {
      user = await userService.insertUser({
        photo: avatarValue,
        userName: displayName,
        email: emailValue,
        password: req.customPassword,
        providerId: id
      });
    }

    token = jwt.sign({ user: {id,displayName,emailValue,avatarValue} }, process.env.SECRET, {
      expiresIn: "7days"
    });

    res.cookie("jwt",token);
    res.cookie("user_info",JSON.stringify({id,displayName,emailValue,avatarValue}));
    res.redirect("http://localhost:3000");
  } catch (error) {
    res.redirect("http://localhost:3000");
  }
};
