import { Router } from "express";


const router= Router();
import asyncHandler from "express-async-handler";
import { UserModel,User } from "../models/userModel";

router.post("/login",asyncHandler(
    async(req:any,res:any)=>{
    const {email}=req.body;
    const {password}=req.body;
    const user=await UserModel.findOne({email:email,password:password});
    if(user){

      user.online=true;
      res.send(user);
    }
    else{

           res.json({msg:-1});
    }
}))

router.post("/register",asyncHandler(
  async(req:any,res:any)=>{
  const {name,email,password,phone_number,gender}=req.body;
  const user=await UserModel.findOne({email:email});
  if(user){
    res.json({msg:-1});
  }
  else{
    const newuser:User ={
      id:'',
      name,
      password,
      email,
      phone_number,
      gender,
      crewman:false,
      online:true,
      crews:[''],
      expiresIn:1200
    }
    const Ur=await UserModel.create(newuser);

         res.send(Ur);
  }
}))





export default router;