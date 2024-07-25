import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
      const connectionIn =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n MongoDb Connected !! DB HOST ${connectionIn.connection.host}`);
    }catch(error){
       console.log("Mongo DB Connection erro", error);
       process.exit(1)
    }
}

export default connectDB