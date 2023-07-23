import {Router} from 'express';
import AuthCtrl from '../controller/auth.controller';
import passport from '../config/passport';

const authCtrl = new AuthCtrl();
const router = Router();

router.route('/login').post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

router.route('/register').post(authCtrl.register); // {username: '',password: ''}

router.route('/change_my_password').patch(authCtrl.resetMyPassword); // {new_password: ''}

router.route('/change_password').patch(authCtrl.resetPassword); // {username: '', new_password: ''}

router.route('/logout').get(authCtrl.logout)

router.route('/session').get(authCtrl.getSession);

export default router;