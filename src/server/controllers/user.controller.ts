import {User} from '../model';
import {Request, Response} from 'express';
import BaseController from './base.controller';
import { Error, PassportLocalDocument, PassportLocalModel } from 'mongoose';
import passport from 'passport';

export default class UserController extends BaseController{

    constructor(){super(User)}

    login = async (req: Request, res: Response)=>{
        if (!req.body.username) {
            res.json({ success: false, message: "Username was not given" })
        }
        else if (!req.body.password) {
            res.json({ success: false, message: "Password was not given" })
        }
        else {
            passport.authenticate("local",  (err:any, user:any, info:any)=> {
                if (err) {
                    res.json({ success: false, message: err });
                }
                else {
                    if (!user) {
                        res.json({ success: false, message: "username or password incorrect" });
                    }
                    else {
                        // const token = jwt.sign({ userId: user._id, username: user.username }, secretkey, { expiresIn: "24h" });
                        res.json({ success: true, message: "Authentication successful", docs: {username: user.username, _id: user._id, roles: user.roles, permissions: user.permissions} });
                    }
                }
            })(req, res);
        }
    }

    register = async (req: Request, res: Response)=>{
        
        const data = req.body;
        console.log(data);
         User.register({username: data.username,email: data.email},data.password,(err: Error, user)=>{
            if(err) return res.send({success: false, message: err.message})
            if(user){
                let {_id, username, roles, permissions} = user;
                return res.send({success: true, docs: {_id, username, roles, permissions}})
            }else{
                return res.send({success: false, message: 'حدث خطأ أثناء تسجيل الدخول'})
            }
            
        })
    }

    resetPassword = async (req: Request, res: Response)=>{
        const data = req.body;
         let u : PassportLocalModel<PassportLocalDocument> = User;
         u.findByUsername(data.username,true).then((user)=>{
            if(user){
                user.setPassword(data.password,(err,doc)=>{
                    if(err) res.status(500).json({ success: false, message: 'This user does not exist'});
                    res.send({success: true, message: 'تم تحديث كلمة المرور بنجاح'})
                })
            }else{
                res.status(500).json({success: false, message: 'This user does not exist'});
            }
         });
    }

}