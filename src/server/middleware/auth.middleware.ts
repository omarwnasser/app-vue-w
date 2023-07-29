import {Request, Response, NextFunction} from 'express';


export default class MW{

    isLogin = async (req: Request, res:Response, next: NextFunction)=>{
        try {
            if(req.session.passport != undefined){
                if(req.session.cookie.expires!= undefined && req.session.cookie.expires > new Date()){
                    next();
                }else{
                    res.status(400).send('Server requires application/json')
                }
            }else{
                res.status(400).send('Server requires application/json')
            }
        } catch (error) {
                next()
        }
    }
}