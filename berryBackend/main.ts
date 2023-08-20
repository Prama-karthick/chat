import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { dbConnect } from '../berryBackend/dbconfig';
import cors from 'cors';
import { UserModel } from './models/userModel'
import { Router } from "express";
import  userrouter  from "./routers/userrouter"
import bodyParser from 'body-parser';
const router= Router();

import asyncHandler from "express-async-handler";
import crewrouter from './routers/crewrouter';

dotenv.config();
dbConnect();
 
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) => {
  res.send("start world");
})



app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
  }));


  const port=process.env.PORT || 3000;
app.listen(port,()=>{
  console.log("server connected to ",port);
});

app.use("/api/users",userrouter);
app.use("/api/crew",crewrouter);

// app.use(express.static('public'));
// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname ,'public','index.html'))
// })
