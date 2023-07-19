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

}   