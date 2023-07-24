import {Router} from 'express';
import PostCtrl from '../controller/post.controller';

const postCtrl = new PostCtrl();
const router = Router();


router.route('/all').get(postCtrl.getAll); 


export default router;