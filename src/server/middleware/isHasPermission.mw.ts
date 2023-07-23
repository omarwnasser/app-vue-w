import {Request , Response , NextFunction} from 'express';
import {User} from '../model';


export const isHasPermission = async (req:Request,res: Response,next: NextFunction)=>{
    if(req.session.passport && req.session.passport.user){
       const u = await User.findOne({username: req.session.passport.user});
       if([...u.permissions].length){
        req.session.passport.permissions = u.permissions;
        next()
       }else{
         next()
       }
    }else{
        res.redirect('/login')
    }
}

