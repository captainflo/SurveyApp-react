const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailers = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemple');// content of the email

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys/thanks', (req,res)=>{
        res.send('Thank for voting!');
        console.log(res);
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res)=>{
        const {title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title: title,
            subject: subject,
            body: body,
            // take the list of email address slipt into a array
            // return a object for every email with proprety of email and value of the email address
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        // Great place to send an email!
        const mailer = new Mailers(survey, surveyTemplate(survey));
        try{
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch(err){
            res.status(422).send(err);
        }
    });
};