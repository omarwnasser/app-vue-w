import { Request, Response } from 'express';
import { Document, Model } from 'mongoose';


export default class BaseController {

    constructor(private model: Model<Document>) { }

    getAll = async (req: Request, res: Response) => {
        try {
            await this.model.find({}).then(e => {
                res.send({ success: true, docs: e })
            }).catch(err => {
                res.send({ success: false, error: err })
            })
        } catch (error) {
            res.send({ success: false, error: error })
        }
    }

    insert = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const docs = new this.model(data);
            docs.save().then(e => {
                res.send({ success: true, docs: e })
            }).catch(err => {
                res.send({ success: false, error: err })
            })
        } catch (error) {
            res.send({ success: false, error: error })
        }
    }

    getData = async (req: Request, res: Response) => {
        try {

            const data = req.body; // {data: Object , limit: number , page: number , select: array[string] , populate: [{ path: '', select: '' }]}

            let docs = this.model.find({ ...data.data })

            if (data.select) {
                docs.select([...data.select])
            }

            if (data.populate) {
                [...data.populate].forEach(e => {
                    docs.populate(e);
                })
            }

            if (data.limit) {
                if (data.page) {
                    docs.skip((data.page - 1) * data.limit).limit(data.limit)
                } else {
                    docs.limit(data.limit)
                }
            }

            await docs.then(e => {
                res.send({ success: true, docs: e })
            }).catch(err => {
                res.send({ success: false, error: err })
            })
        } catch (error) {
            res.send({ success: false, error: error })
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            await this.model.deleteOne({ _id: req.params.id }).then(e => {
                res.send({ success: true, docs: e })
            }).catch(err => {
                res.send({ success: false, error: err })
            })
        } catch (error) {
            res.send({ success: false, error: error })
        }
    }


}   