import {Schema, model, Model, Document,Types} from 'mongoose';

const PostSchema =  new Schema({
        title: {type: String},
        user: {type: Types.ObjectId, ref: 'User'},
        likes: [{type: Types.ObjectId, ref: 'User'}],
        comments: [{type: Types.ObjectId, ref: 'Comment'}],
        imageUrl: [{type: String}]
    },{timestamps: true});


export const Post = model('Post',PostSchema);