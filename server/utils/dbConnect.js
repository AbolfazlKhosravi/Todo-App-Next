import mongoose from "mongoose";

const connection={};

async function dbConnect() {
    if(connection.isConnected){
        return
    }

    const db=await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopoLogy:true,
    })

    connection.isConnected=db.connection[0].readyState;
}

export default dbConnect