import passport, { session } from 'passport';
import Strategy from 'passport-local';
import {User} from '../model';


passport.use(new Strategy.Strategy(function verify(username, password, cb) {
    User.authenticate()(username,password).then((user)=>{
        if(user.user)
            return cb(null, user.user);
        else
            return cb(user.error);
    })
}));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());

export default passport;