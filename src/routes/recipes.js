import { RecipeModel } from "../models/Recipes.js";
import express from "express";
import mongoose from "mongoose";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req,res)=>{
    try {
       const response = await RecipeModel.find({}); 
       res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", verifyToken, async (req,res)=>{
    const recipe = new  RecipeModel(req.body);
    try {
       const response = await recipe.save(); 
       res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.put("/",  verifyToken, async (req,res)=>{
    try {
        const recipe = await RecipeModel.findById(req.body.recipeID);
       const user = await UserModel.findById(req.body.userID);
       user.savedRecipes.push(recipe);
       await user.save();
       res.json({savedRecipes: user.savedRecipes});
    } catch (err) {
        res.json(err);
    }
});

router.get("/savedRecipes/ids/:userID", async(req,res)=>{
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({savedRecipes: user?.savedRecipes});
    } catch (err) {
        res.json(err);
    }
});

router.get("/savedRecipes/:userID", async(req,res)=>{
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedRecipes = await RecipeModel.find({
            _id: {$in: user.savedRecipes},
        });
        res.json({savedRecipes});
    } catch (err) {
        res.json(err);
    }
});

// Remove saved recipe
router.delete("/savedRecipes", verifyToken, async (req, res) => {
    try {
        const { recipeID, userID } = req.body; // We get the recipeID and userID from the request body

        // Find the user
        const user = await UserModel.findById(userID);

        // Remove the recipe from the savedRecipes array
        user.savedRecipes = user.savedRecipes.filter(
            (savedRecipeID) => savedRecipeID.toString() !== recipeID
        );

        await user.save();

        res.json({ savedRecipes: user.savedRecipes }); // Return the updated list of saved recipes
    } catch (err) {
        res.json(err);
    }
});


export {router as recipesRouter};