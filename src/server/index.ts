import express, { type NextFunction, type Request, type Response } from "express"
import path from "path"


const app = express()

app.use(express.static(path.join(__dirname, '..','..','/dist')))

app.get('/',(req: Request,res: Response ,next: NextFunction)=>{
    res.sendFile(path.join(__dirname, '..','..','/dist/index.html'))
})

app.listen(3002, () => console.log("Server started at port 3002"))
