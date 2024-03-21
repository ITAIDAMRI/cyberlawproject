import express from 'express';
import usersRouter from "./routes/userRouter.js"
import dotenv from "dotenv"
import connectDB from './dbConnection/mongoDBConneciton.js';
import cors from "cors"
const app = express();


app.use(cors())
dotenv.config()

connectDB()

app.use("/users", usersRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
