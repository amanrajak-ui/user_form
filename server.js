import express from 'express'
import path from 'path'
import mongoose from 'mongoose';
// import {User} from './Models/User.js'

import { userRegister } from './controllers/user.js';


const app=express();
const port=1000;

app.use(express.static(path.join(path.resolve(),'public'))) // jo css static file hai public nam ke folder me uske liye ye kr rahe hai




//ye hm form se jo data raha hai wo kese handle hoga backend me woo handle hoo raha hai
app.use(express.urlencoded({extended:true}))



//mongodb connection
mongoose.connect("mongodb+srv://akrajak151:XusZ4xuvs59L4Ago@cluster0.vxnoxx8.mongodb.net/",{dbName:"Nodejs_Express_Course"}

).then(()=>console.log("Mongoose db connected")).catch((error)=>console.log(error))



app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/form-submit', userRegister)



















app.listen(port,()=>console.log(`server run at ${port}`))