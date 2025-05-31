import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
//import dotenv from 'dotenv'; 
//dotenv.config();


import { userRouter} from  './routes/users.js';
import { recipesRouter} from  './routes/recipes.js';


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes",  recipesRouter);


mongoose.connect("mongodb://localhost:27017/recipes",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("CONNECTION SUCCESSFUL");
}).catch((e) =>{
    console.log(e);
});
app.listen(PORT, () => console.log("SERVER STARTED!"));