import { Router } from "express";


const router= Router();
import asyncHandler from "express-async-handler";
import { CrewModel,Crew } from "../models/crewModel";
import { User, UserModel } from "../models/userModel";

router.post("/createcrew",asyncHandler(
    async(req:any,res:any)=>{

    const {crewname,Members}=req.body;
    var userfound;
    let count=0;
    const crew=await CrewModel.findOne({CrewName:crewname});
    for(var i=0;i<Members.length;i++){
        userfound=await UserModel.findOne({email:Members[i].mail});
        if(userfound)
        {count+=1}
    }
    if(crew){
         res.json({msg:-1});
    }
    else if(count!==Members.length){
        res.json({msg:-2});
    }
    else{
        const newcrew:Crew ={
                id:'',
                CrewName:crewname,
                Members:Members,
                chats:['']
        }
        const Ur=await CrewModel.create(newcrew);

           res.send(Ur);
    }
   
  
  }))


  router.post("/opencrew",asyncHandler(
    async(req:any,res:any)=>{

    const { cname,mail }=req.body;
    const crew=await CrewModel.findOne({CrewName:cname});
        
    if(!crew){
         res.json({msg:-1});
    }
    else{
        //.find({EmployeeDetails:{$elemMatch:{EmployeePerformanceArea : "C++", Year : 1998}}})
        const groupmembers = await CrewModel.findOne({CrewName:cname},{Members:1,_id:0})
        let user;
        if(groupmembers){
            for(var i=0;i<groupmembers.Members.length;i++){
                if(mail==groupmembers.Members[i].mail){
                    
                    user=groupmembers.Members[i]
                }
            }
        }
        if(user){
           res.send(crew);
        }
        else{
            res.json({msg:-2});
        }
    }
   
  
  }))



  router.post("/getchats",asyncHandler(
    async(req:any,res:any)=>{
    const { cname }=req.body;
    const crew=await CrewModel.findOne({CrewName:cname});

    if(!crew){
         res.json({msg:-1});
    }
    else{
        let previouschat= crew.chats
           res.send(previouschat);
    }
   
  
  }))






  router.post("/chatnow",asyncHandler(
    async(req:any,res:any)=>{
    const { crewname,nmessage }=req.body;
    const crew=await CrewModel.findOne({CrewName:crewname});

    if(!crew){
         res.json({msg:-1});
    }
    else{
        let messages= crew.chats
        messages.push(nmessage);
        crew.chats=messages;
        await crew.save();
           res.send(crew);
    }
   
  
  }))
  
  
  
  
  
  export default router;