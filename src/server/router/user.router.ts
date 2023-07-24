import {Router} from 'express';
import AuthCtrl from '../controller/auth.controller';
import passport from '../config/passport';
import MW from '../middleware/auth.middleware';

const authCtrl = new AuthCtrl();
const router = Router();
const mw = new MW();

router.route('/login').post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

router.route('/register').post(authCtrl.register); // {username: '',password: ''}

router.route('/change_my_password').patch(authCtrl.resetMyPassword); // {new_password: ''}

router.route('/change_password').patch(authCtrl.resetPassword); // {username: '', new_password: ''}

router.route('/logout').get(authCtrl.logout)

router.route('/session').get(authCtrl.getSession);

router.route('/session').get(mw.isLogin,(req,res)=>{
  res.send({success: true, docs: req.user , sessionStore: req.sessionStore,session: req.session , sessionId: req.sessionID})
});

router.route('/logout').get((req,res)=>{
  req.logout(()=>{
    res.send({session: true, message: 'تم تسجيل الخروج بنجاح'});
  });
});


export default router;