import {Model,Document} from 'mongoose';
import {Request, Response} from 'express';


export default class BaseController{

    constructor(private model: Model<Document>){}

    all = async (req: Request, res: Response)=>{
        const docs  = await this.model.find({});
        res.send({success: true, docs}).sendStatus(200)
    }

    getId = async (req: Request, res: Response)=>{
        const id = req.params.id;
        const doc  = await this.model.findOne({_id: id});
        res.send({success: true, doc}).sendStatus(200)
    }

    getWith = async (req: Request, res: Response)=>{
        const data = req.body;
        const docs  = await this.model.find({...data});
        res.send({success: true, docs}).sendStatus(200)
    }

    getDeep = async (req: Request, res: Response)=>{
        const data: any[] = req.body; // send array of aggregate Objects with no functions
        const docs = await this.model.aggregate(data);
        res.send({success: true, docs}).sendStatus(200)
    }

    softDelete = async (req: Request, res: Response)=>{
        const id = req.params.id;
        const doc  = await this.model.updateOne({_id: id},{$set: {rm : 1}});
        res.send({success: true, doc}).sendStatus(200)
    }

    hardDelete = async (req: Request, res: Response)=>{
        const id = req.params.id;
        const doc  = await this.model.deleteOne({_id: id});
        res.send({success: true, doc}).sendStatus(200)
    }
}