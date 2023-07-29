import {Request , Response , NextFunction} from 'express';
import {User} from '../model';


export const isLogin = async (req:Request,res: Response,next: NextFunction)=>{
    if(req.session.passport && req.session.passport.user){
        next()
    }else{
        res.redirect('/login')
    }
}

