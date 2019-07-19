// prod.js - production keys here!!!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    facebookClientID: process.env.FACEBOOK_CLIENT_ID,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    instagramClientID: process.env.INSTAGRAM_CLIENT_ID,
    instagramClientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    linkedinClientID: process.env.LINKEDIN_CLIENT_ID,
    linkedinClientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    secret: process.env.LOCAL_SECRET,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
    // twitterClientID: process.env.TWITTER_CLIENT_ID,
    // twitterClientSecret: process.env.TWITTER_CLIENT_SECRET,
};