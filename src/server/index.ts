import express, { type NextFunction, type Request, type Response } from "express"
import path from "path";
import 'dotenv/config';
import history from "connect-history-api-fallback";
// import mongoose from "mongoose";
import './config/db';
import passport from './config/passport';
import router from './router';
import session from 'express-session';
import MongoSession from 'connect-mongo';
import Morgan from 'morgan';
 
declare module "express-session" {
    interface SessionData {
      passport: any;
    }
  }


const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use( session({
    secret: process.env.Session_key ?? 'lsl&%KHk88jkHJk',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 24*60*60*1000,
        secure: false,
    },
    store: new MongoSession({
        mongoUrl: process.env.Mongodb_Url,
        collectionName: 'session',
        autoRemove: "native",
    })
}));

app.use(Morgan('short'))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, '..','..','/dist')))

app.use('/api',router);

app.get('/',(req: Request,res: Response ,next: NextFunction)=>{
    
    res.sendFile(path.join(__dirname, '..','..','/dist/index.html'))
})

app.use(history())



app.listen(process.env.Port, () => console.log("Server started at port "+process.env.Port))
