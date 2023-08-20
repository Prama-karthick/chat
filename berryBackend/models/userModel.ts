import { model, Schema } from "mongoose";

export interface User{
  id:string;
  name:string;
  email:string;
  phone_number:number;
  password:string;
  crewman:boolean;
  gender:string;
  crews:string[];
  online:boolean;
  expiresIn:number;
}

export const UserSchema=new Schema<User>({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  phone_number:{type:Number,required:true,unique:true},
  password:{type:String,required:true},
  crewman:{type:Boolean,required:true},
  gender:{type:String,required:true},
  online:{type:Boolean,required:true},
  crews:{type:[String]},
  expiresIn:{type:Number},
},
{
  toJSON:{virtuals:true},toObject:{virtuals:true},timestamps:true
})


export const UserModel=model<User>('UserCollections',UserSchema);