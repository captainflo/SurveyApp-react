const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local Strategy
const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email,password,done){
  // Verify this username and password, call done with the user
  // if it is the correct username ans password
  // otherwise, call done with false
  User.findOne({email: email}, function(err,user){
    if (err){return done(err);}
    if (!user){return done(null,false);}
    
    // compare password - is `password` is equal to user.password?
    user.comparePassword(password, function(err, isMatch){
      if (err){return done(err);}
      if (!isMatch){return done(null, false);}
      return done(null, user);
    })
  })
})

// Setup option JWT Strategy
const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(JwtOptions, function(payload, done){
  // See if the user ID in thez payload exits in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err,user){
    if (err){return done(err,false);}
    if(user){
      done(null,user);
    }else{
      done(null,false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)

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
    async (accessToken, refreshToken, profile, done) => {
      // don't have double User with same profileID
      const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          // We already have record with given profile ID
          return done(null, existingUser);
        } 
        // We don't have a user with this ID, make a new record
        const user = await new User({ googleId: profile.id }).save()
        done(null, user); 
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

