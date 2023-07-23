import {Router} from 'express';
import UserRouter from './user.router';
import PostRouter from './post.router';
import CommentRouter from './comment.router';

const router = Router();

router.use('/user',UserRouter);
router.use('/post',PostRouter);
router.use('/comment',CommentRouter);


export default router;


//baseurl / api / index router / routers

//localhost:3002/api/user/login