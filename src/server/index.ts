import express, { type NextFunction, type Request, type Response } from "express"
import path from "path";
import 'dotenv/config';
import history from "connect-history-api-fallback";
import session from 'express-session';
import MongoSession from 'connect-mongo';
import Morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import localStrategy from 'passport-local';
import {User} from './model';
import router from './router';
import mongoose from 'mongoose';


// declare module "express-session" {
//     interface SessionData {
//         passport: any;
//     }
// }

const app = express()
app.use(express.static(path.join(__dirname, '..', '..', '/dist')))

mongoose.connect(process.env.Mongodb_Url ?? 'mongodb://127.0.0.1:27017/vue_app')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json())

if (process.env.MODE == 'Development')
    app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.Session_key ?? 'lsl&%KHk88jkHJk',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
    },
    store: new MongoSession({
        mongoUrl: process.env.Mongodb_Url,
        collectionName: 'session',
        autoRemove: "native",
    })
}));

app.use(Morgan('short'))

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize())
app.use(passport.session())

app.use(history())


app.use('/api', router);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '..', '..', '/dist/index.html'))
})





app.listen(process.env.Port, () => console.log("Server started at port " + process.env.Port))
