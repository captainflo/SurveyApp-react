const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

// Generate cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token',accessToken);
      console.log('refresh token',refreshToken);
      console.log('profile:',profile);

      // don't have double User with same profileID
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have record with given profile ID
          done(null, existingUser);
        } else {
          // We don't have a user with this ID, make a new record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

// Instagram
passport.use(
  new InstagramStrategy(
    {
      clientID: keys.instagramClientID,
      clientSecret: keys.instagramClientSecret,
      callbackURL: "/auth/instagram/callback",
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('access token',accessToken);
      console.log('refresh token',refreshToken);
      console.log('profile:',profile);

      // don't have double User with same profileID
      User.findOne({ instagramId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have record with given profile ID
          done(null, existingUser);
        } else {
          // We don't have a user with this ID, make a new record
          new User({ instagramId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

// Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('access token',accessToken);
      console.log('refresh token',refreshToken);
      console.log('profile:',profile);
      // don't have double User with same profileID
      User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have record with given profile ID
          done(null, existingUser);
        } else {
          // We don't have a user with this ID, make a new record
          new User({ facebookId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

// Linkedin 
passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedinClientID,
      clientSecret: keys.linkedinClientSecret,
      callbackURL: "/auth/linkedin/callback",
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
       console.log('access token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile:',profile);
      // don't have double User with same profileID
      User.findOne({ linkedinId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have record with given profile ID
          done(null, existingUser);
        } else {
          // We don't have a user with this ID, make a new record
          new User({ linkedinId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

// Twitter 
// passport.use(
//   new TwitterStrategy(
//     {
//       clientID: keys.twitterClientID,
//       clientSecret: keys.twitterClientSecret,
//       callbackURL: "/auth/twitter/callback",
//       proxy: true
//     },
//     function(accessToken, refreshToken, profile, done) {
//        console.log('access token',accessToken);
//         console.log('refresh token',refreshToken);
//         console.log('profile:',profile);
//       // don't have double User with same profileID
//       User.findOne({ twitterId: profile.id }).then(existingUser => {
//         if (existingUser) {
//           // We already have record with given profile ID
//           done(null, existingUser);
//         } else {
//           // We don't have a user with this ID, make a new record
//           new User({ twitterId: profile.id })
//             .save()
//             .then(user => done(null, user));
//         }
//       });
//     }
//   )
// );

