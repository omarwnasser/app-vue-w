import {Schema, model, Model, Document,Types} from 'mongoose';

const PostSchema =  new Schema({
        title: {type: String},
        hashtag: {type: String},
        description: {type: String},
        user: {type: Types.ObjectId, ref: 'User'},
        likes: [{type: Types.ObjectId, ref: 'User'}],
        comments: [{type: Types.ObjectId, ref: 'Comment'}],
        imageUrl: [{type: String}]
    },{timestamps: true});


export const Post : Model<Document>  = model('Post',PostSchema);