import UserCtrl from '../controllers/user.controller';
import {Router} from 'express';


const userCtrl = new UserCtrl;
const router = Router();

router.route('/login').post(userCtrl.login);
router.route('/register').post(userCtrl.register);
router.route('/reset').post(userCtrl.resetPassword);
router.route('/logout').get((req,res)=>{
    if (req.session.user._id) {
        req.session.destroy(function(err){

        })
        res.clearCookie('connect.sid') // clean up!
        return res.json({ msg: 'logging you out' })
      } else {
        return res.json({ msg: 'no user to log out!' })
      }
})

router.route('/test').get((req,res)=>{
    res.send(req.sessionID)
})

export default router;