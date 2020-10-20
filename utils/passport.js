const passport = require('passport');
const { Strategy : FacebookStrategy } = require('passport-facebook');
const { Strategy: GoogleStrategy  } = require('passport-google-oauth20');

exports.facebookPassportConfig = () => {
  return passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/daily-news/auth/facebook/callback',
        enableProof: true,
        profileFields: ['id', 'displayName', 'name', 'emails','photos'],
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        try {
          if (profile) {
            req.user = profile;
            req.customPassword = `facebook_${profile.id}`;  
            done(null, profile)
          }
        } catch (error) {
          done(error)
        }
      }
    )
  )
}

exports.googlePassportConfig = () => {
  return passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/daily-news/auth/google/callback',
        scope: ["profile","email"],
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        try {
          if (profile) {
            req.user = profile;
            req.customPassword = `google_${profile.id}`;
            done(null, profile)
          }
        } catch (error) {
          done(error)
        }
      }
    )
  )
}