const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');

passport.use(new GoogleStrategy({
    //options for the strategy
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
    console.log('passport callback function fired');
    console.log('profile information',profile);
    //https://www.youtube.com/watch?v=ySFXduSdpxs&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x&index=10
}))

module.exports = passport;