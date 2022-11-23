const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../models');


function passwordsMatch (submittedPassword, storedPasswordHash) {
    return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

/*
following code runs at login time.
usernameField and passwordField options refer to the http requets
and body parameter names. as of now usernameField is set for an 'email' parameter.
for security reasons the user is not given a reason as to why the login failed. 
*/

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},

//callback function to check credtentials 
(email, password, done) => {
    User.findOne({where: { email } })
    .then((user) => {
        if(!user){
            console.log('\n\nFailed Login: user does not exist\n\n');
            return done(null, false, { message: 'Failed Login' });
        }

        if(passwordsMatch(password, user.passwordHash) === false){
            console.log('\n\nFailed Login: passwords did not match\n\n');
            return done(null, false, { message: 'Failed Login' });
        }

        console.log('\n\nSuccessful Login\n\n');
        return done(null, user, { message: 'Sucessfully Logged In!'});
    })
    .catch(err => { return done (err) });
})
);

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findByPk(id)
    .then((user) => {
        if (!user) {
            done(null,false);
            return;
        }

        done(null, user);
        return;
    })
    .catch(err => done(err, null));
    
});


module.exports = passport;