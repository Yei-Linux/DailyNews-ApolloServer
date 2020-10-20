const express = require("express");
const router = express.Router();

const passport = require("passport");
const socialProviderController = require("../controllers/socialProviderController");

router.get("/facebook", passport.authenticate("facebook", { scope: ["email"]} ));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: "http://localhost:3000/signin"
  }),
  socialProviderController.socialAuth
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:3000/signin"
  }),
  socialProviderController.socialAuth
);

module.exports = router;
