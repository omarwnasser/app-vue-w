import express, { type NextFunction, type Request, type Response } from "express"
import path from "path";
import 'dotenv/config';
import history from "connect-history-api-fallback";
// import mongoose from "mongoose";
import './config/db';
import passport from './config/passport';
import router from './router';
import session from 'express-session';
import MongoStore from 'connect-mongo';

declare module 'express-session' {
        interface SessionData {
            passport: string;
        }
    }
 

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use( session({
    secret: process.env.Session_key ?? 'lsl&%KHk88jkHJk',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24*60*60*1000
    },
    store: new MongoStore({ mongoUrl: 'mongodb://localhost:27017/session' })
}))

app.use(passport.initialize())
app.use(express.static(path.join(__dirname, '..','..','/dist')))

app.use('/api',router);

app.get('/',(req: Request,res: Response ,next: NextFunction)=>{
    
    res.sendFile(path.join(__dirname, '..','..','/dist/index.html'))
})

app.use(history())



app.listen(process.env.Port, () => console.log("Server started at port "+process.env.Port))
