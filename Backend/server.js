const express=require("express")
const app = express()
const dotenv=require("dotenv").config()
const PORT=process.env.PORT || 3000
const connectDB=require("./config/connectionDB")

connectDB()

app.use(express.json())

app.use("/recipe", require("./routes/recipe"))
// app.get("/",(req,res)=>{
//     res.json({message:"hello Manjot!"})
// })
app.listen(PORT, (err)=>{
    console.log(`app is listening on Port ${PORT}`)
})