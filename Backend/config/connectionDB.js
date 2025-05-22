// To connect application to database
const mongoose=require("mongoose")

const connectDB=async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("connected with MongoDB"))
}

module.exports=connectDB