import {Router} from 'express';
import AuthCtrl from '../controller/auth.controller';
import passport from '../config/passport';

const authCtrl = new AuthCtrl();
const router = Router();

router.route('/login').post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

router.route('/register').post(authCtrl.register);

export default router;