const express=require("express")
const { getRecipes, addRecipe, editRecipe, deleteRecipe } = require("../controller/recipeController")
const {getRecipe} = require("../controller/recipeController")

const router=express.Router()

router.get("/",getRecipes) // router for getting all the recipes.
router.get("/:id", getRecipe) // get recipe using id
router.post("/", addRecipe) // to add recipe
router.put("/:id", editRecipe) // Edit Recipe
router.delete("/:id", deleteRecipe) // to delete recipe by id


// router.get("/",(req,res)=>{
//     res.json({message:"hello router! Hi I am in recipe.js"})
// })

module.exports=router