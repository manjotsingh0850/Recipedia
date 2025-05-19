const getRecipes=(req,res)=>{
    res.json({message:"hello i am in controller"})
}

const getRecipe=(req,res)=>{
    res.json({message:"getting the recipe by ID"})
}

const addRecipe=(req, res)=>{
    res.json({message: "(adding)posting the recipe"})
}

const editRecipe=(req, res)=>{
    res.json({message: "edit Recipe by ID"})
}

const deleteRecipe=(req, res)=>{
    res.json({message:"delete recipe by ID"})
}

module.exports={getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}

