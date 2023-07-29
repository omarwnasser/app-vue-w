import mongoose from 'mongoose';


async function connect() {
    try {
        // console.log(process.env.Mongodb_Url);
        await mongoose.connect(process.env.Mongodb_Url??'mongodb://user:password@127.0.0.1:27017/test').then((e)=>{
            console.log('connect to database successfully');
        },(err)=>{
            console.log(err);
        });
        
    } catch (error) {
        console.log(error); 
    }

  }

  connect();