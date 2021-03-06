const passport = require("passport");
const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);

  // Google authenticate
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Instagram authenticate
  app.get("/auth/instagram", passport.authenticate("instagram"));
  app.get(
    "/auth/instagram/callback",
    passport.authenticate("instagram", { failureRedirect: "/" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/surveys");
    }
  );

  // Facebook authenticate
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/surveys",
      failureRedirect: "/"
    })
  );

  // Linkedin
  app.get("/auth/linkedin", passport.authenticate("linkedin"));
  app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin", { failureRedirect: "/" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/surveys");
    }
  );

  // // Twitter
  // app.get("/auth/twitter", passport.authenticate("twitter"));
  // app.get(
  //   "/auth/twitter/callback",
  //   passport.authenticate("twitter", {
  //     successRedirect: "/surveys",
  //     failureRedirect: "/"
  //   })
  // );

  // to logout by http request
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user",(req, res) => {
    res.send(req.user);
  });
};
