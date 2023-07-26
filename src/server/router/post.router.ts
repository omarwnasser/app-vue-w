import {Router} from 'express';
import PostCtrl from '../controller/post.controller';

const postCtrl = new PostCtrl();
const router = Router();


router.route('/').post(postCtrl.getData);
router.route('/add').post(postCtrl.insert);
router.route('/all').get(postCtrl.getAll); 


export default router;