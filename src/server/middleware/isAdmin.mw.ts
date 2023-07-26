import {Request , Response , NextFunction} from 'express';
import {User} from '../model';


export const isAdmin = async (req:Request,res: Response,next: NextFunction)=>{
    if(req.session.passport && req.session.passport.user){
       const u = await User.findOne({username: req.session.passport.user});
       if([...u.roles].includes('admin')){
        next()
       }else{
        res.sendStatus(403).send({success: false, message: 'لا تملك الصلاحيات لهذه الصفحة'})
       }
    }else{
        res.redirect('/login')
    }
}