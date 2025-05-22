const Recipes = require('../models/recipeModels')

const getRecipes= async(req, res)=>{
    // res.json({message:"hello i am in controller"})
    const recipes=await Recipes.find()
    return res.json(recipes)
}


const getRecipe=async(req,res)=>{
    // res.json({message:"getting the recipe by ID"})
    const recipe=await Recipes.findById(req.params.id)  // it will fetch the ID from the url parameter
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

const editRecipe=async(req, res)=>{ // editRecipe controller func. this will firstly search value by ID and then  delete the existing values and then updated it on the basis of ID of the same value."
    // res.json({message: "edit Recipe by ID"})
    const {title, ingredients, instructions, time, coverImage}=req.body
    let recipe=await Recipes.findById(req.params.id)
    try{
        // if user uses the wrong id then we get error to prevent this use try , catch and put if in try
        
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json({title, ingredients, instructions, time, coverImage})
        }
    }
    catch(err){
        return res.status(404).json({message:"error"})
    }
}

const deleteRecipe=(req, res)=>{
    res.json({message:"delete recipe by ID"})
}

module.exports={getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}

