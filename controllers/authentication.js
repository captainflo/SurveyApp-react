const User = require('../models/User');
const jwt = require('jwt-simple'); // create token
const keys = require('../config/keys')

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, keys.secret)
}

exports.signin = function(req,res,next){
    // User has already had their email and password auth`d
    // We just need to give them a token
    res.send({token: tokenForUser(req.user)});
}

exports.signup = function (req, res, next){
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(422).send({error: 'You must provide email and password'})
    }
    // See if user with the given email exists
    User.findOne({email: email}, function(error, existingUser){
        if (error) {return next(error);}

        // if a user with email does exist, return error
        if (existingUser){
            return res.status(422).send({error: 'Email is in use'});
        }

        // if a user with email does Not exist, create and save user record 
        const user = new User({
            email: email,
            password: password
        })

        user.save(function(error){
            if (error) {return next(error);}
            // Repond to request indicating the user was created
            res.json({token: tokenForUser(user)});
        })
    })
}