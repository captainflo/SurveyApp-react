const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


require('./models/User');
require('./services/passport');

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

// Connect to Mongo Atlas 
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })

// App Setup
app.use(morgan('combined')); /* login server in your terminal*/
app.use(bodyParser.json({type: '*/*'})); /* used to parse incoming requests */

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


// Server Setup
const PORT = process.env.PORT || 3001;
app.listen(PORT);