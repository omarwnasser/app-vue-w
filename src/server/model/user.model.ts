import {Schema, model} from 'mongoose';
import plm from 'passport-local-mongoose';

const UserSchema = new Schema({
    email: {type: String,unique: true, require: true},
    roles : {type: [String], default: ['user']},
    permissions: {type: [String]},
    isActive: {type: Boolean, default: true},
    rm: {type: Number, default: 0}
})

UserSchema.plugin(plm);

const User = model("User",UserSchema);

export {User};