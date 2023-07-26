import { Request, Response } from 'express';
import { Document, Model } from 'mongoose';


export default class BaseController {

   constructor( private model: Model<Document>){}

   getAll = async (req: Request, res: Response) => {
        await this.model.find({}).then(e => {
            res.send({ success: true, docs: e })
        }).catch(err => {
            res.send({ success: false, error: err })
        })
    }

    insert = async (req: Request, res: Response) => {
        const data = req.body;
        const docs = new this.model(data);
        docs.save().then(e => {
            res.send({ success: true, docs: e })
        }).catch(err => {
            res.send({ success: false, error: err })
        })
    }

    delete = async (req: Request, res: Response) => {
        await this.model.deleteOne({_id: req.params.id}).then(e => {
            res.send({ success: true, docs: e })
        }).catch(err => {
            res.send({ success: false, error: err })
        })
    }

}   