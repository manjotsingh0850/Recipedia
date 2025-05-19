const express=require("express")
const { getRecipes } = require("../controller/recipeController")
const router=express.Router()

router.get("/",getRecipes)
// router.get("/",(req,res)=>{
//     res.json({message:"hello router! Hi I am in recipe.js"})
// })

module.exports=router