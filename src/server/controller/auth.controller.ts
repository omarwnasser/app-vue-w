import {Request, Response} from 'express';
import Base from './base.controller';
import {User} from '../model';


export default class UserController extends Base{

    constructor(){
        super(User)
    }

    async register(req:Request,res:Response){
        const data = req.body;
        await User.register({username : data.username},data.password,((err,user)=>{
            if(err) return res.send({success: false, error: err})
            res.send({success: true, docs: user})
        }))
    }

    async resetMyPassword(req:Request,res:Response){
        const data = req.body;
        if(req.session.passport && req.session.passport.user)
            await User.findOne({username: req.session.passport.user, activate: true}).then(e=>{
                if(e){
                    e.setPassword(data.new_password, function(){
                        e.save();
                        res.status(200).json({success: true,message: 'تم تحديث كلمة المرور بنجاح'});
                    });
                }else{
                    res.status(402).json({success: false,message:    'اما الحساب موقوف او محذوف'});
                }
            })
        else
            res.send({success: false, message: 'يجب تسجيل الدخول أولا '})
    }

    async resetPassword(req:Request,res:Response){
        const data = req.body;
            await User.findOne({username: data.username, activate: true}).then(e=>{
                if(e){
                    e.setPassword(data.new_password, function(){
                        e.save();
                        res.status(200).json({success: true,message: 'تم تحديث كلمة المرور بنجاح'});
                    });
                }else{
                    res.status(402).json({success: false,message:    'اما الحساب موقوف او محذوف'});
                }
            })
    }

    async logout(req:Request, res:Response){
       await req.logout(()=>{
            res.send({success: true, message: 'تم تسجيل الخروج بنجاح'})
        })
    }

    async getSession(req:Request,res:Response){
        res.send({success: true, docs: {sessionId: req.sessionID, session: req.session.passport.user,sessionStore: req.sessionStore}})
    }

}   