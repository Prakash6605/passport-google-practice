const router = require('express').Router();
const passport = require('passport');
// auth login
router.get('/login',(req,res)=>{
    res.render('login');
});


// auth logout
router.get('/logout',(req,res)=>{
   // handle with passport
    res.send('logging out');
});


//auth with google
router.get('/google',passport.authenticate('google',{
    //scope is basically what kind of details of users do you want from the google , for the time being i am only asking for users profile information
    scope:['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('You reached a call back uri');
})

module.exports = router;

