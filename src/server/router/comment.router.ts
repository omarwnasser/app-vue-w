import {Router} from 'express';
import CommentCtrl from '../controller/comment.controller';

const commentCtrl = new CommentCtrl();
const router = Router();

router.route('/').post(commentCtrl.getData);
router.route('/add').post(commentCtrl.insert);
router.route('/all').get(commentCtrl.getAll); 


export default router;