const router = require('express').Router();

const authCheck = (req,res,next)=>{
     if(req.user){
         //user is logged in
         next();
     }else{
         //user is not logged in
         res.redirect('/auth/login');
     }
}

router.get('/',authCheck,(req,res)=>{
//    res.send('You are loogged in , this is your profile'+req.user.username);
   res.render('profile',{user : req.user });
})

module.exports = router;