import {Schema, model, Model, Document} from 'mongoose';
import plm from 'passport-local-mongoose';

const UserSchema =  new Schema({
        email: {type: String, require: true, unique: true},
        permissions: [{type: String}],
        roles: [{type: String}],
        activate: {type: Boolean, default: true},
    },{timestamps: true});

UserSchema.plugin(plm);

export const User = model('User',UserSchema);