const passport = require("passport");

module.exports = app => {
  // Google authenticate
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google"));

  // Instagram authenticate
  app.get("/auth/instagram", passport.authenticate("instagram"));

  app.get(
    "/auth/instagram/callback",
    passport.authenticate("instagram", { failureRedirect: "/login" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );

  // Facebook authenticate
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/",
      failureRedirect: "/login"
    })
  );

  // Linkedin
  app.get("/auth/linkedin", passport.authenticate("linkedin"));
  app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin", {
      successRedirect: "/",
      failureRedirect: "/login"
    })
  );

  // to logout by http request
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
