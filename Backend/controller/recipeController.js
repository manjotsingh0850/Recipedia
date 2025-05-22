const Recipes = require('../models/recipeModels')

const getRecipes= async(req, res)=>{
    // res.json({message:"hello i am in controller"})
    const recipes=await Recipes.find()
    return res.json(recipes)
}


const getRecipe=async(req,res)=>{
    // res.json({message:"getting the recipe by ID"})
    const recipe=await Recipes.findById(req.params.id)  // it will fetch the ID from the usl parameter
    res.json(recipe)
}

const addRecipe=async(req, res)=>{
    // res.json({message: "(adding)posting the recipe"})
    const{title, ingredients, instructions, time, coverImage}=req.body
        
    if(!title || !ingredients ||!instructions ||!time ||!coverImage){
        res.json({message:"Required fields can't be empty"})
    }

    const newRecipe=await Recipes.create({
        title, ingredients, instructions, time, coverImage
    })
    return res.json(newRecipe)
}

const editRecipe=(req, res)=>{
    res.json({message: "edit Recipe by ID"})
}

const deleteRecipe=(req, res)=>{
    res.json({message:"delete recipe by ID"})
}

module.exports={getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}

