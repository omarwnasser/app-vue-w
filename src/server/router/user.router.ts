import UserCtrl from '../controllers/user.controller';
import {Router} from 'express';


const userCtrl = new UserCtrl;
const router = Router();

router.route('/login').post(userCtrl.login);
router.route('/register').post(userCtrl.register);
router.route('/reset').post(userCtrl.resetPassword);

export default router;