import { model, Schema } from "mongoose";
import { members } from "./interfaces";
export interface Crew{
  id:string;
  CrewName:string;
  Members:members[];
  chats:string[];
}
export const membersSchema=new Schema<members>({
  name:{type:String,required:true},
  mail:{type:String,required:true}
})


export const CrewSchema=new Schema<Crew>({
  CrewName:{type:String,required:true,unique:true},
  Members:{type:[membersSchema],required:true},
  chats:{type:[String]}
},
{
  toJSON:{virtuals:true},toObject:{virtuals:true},timestamps:true
})


export const CrewModel=model<Crew>('CrewCollections',CrewSchema);