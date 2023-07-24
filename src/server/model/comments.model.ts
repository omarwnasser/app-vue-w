import {Schema, model, Model, Document,Types} from 'mongoose';

const CommentSchema =  new Schema({
        comment: {type: String},
        post:  {type: Types.ObjectId, ref: 'Post'},
        user: {type: Types.ObjectId, ref: 'User'},
        likes: [{type: Types.ObjectId, ref: 'User'}],
        comments: [{type: Types.ObjectId, ref: 'Comment'}],
        imageUrl: [{type: String}]
    },{timestamps: true});


export const Comment = model('Comment',CommentSchema);