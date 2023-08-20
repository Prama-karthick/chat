import { connect,ConnectOptions, set } from "mongoose";
const LOCAL_DB_CON="mongodb://127.0.0.1:27017/chat";
const GLOBAL_DB_CON="mongodb+srv://pramakarthick:Crewman@okayberry.byt8wo6.mongodb.net/?retryWrites=true&w=majority"
export const dbConnect =()=>{
  connect(GLOBAL_DB_CON!,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  } as ConnectOptions).then(
    ()=>console.log("connected successful"),
    (error)=>console.log(error)
  )
}