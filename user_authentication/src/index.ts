import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

try {
  mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("mongo connection successful");
  });
} catch (error) {
  console.log("Error connection with mongo", error);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "hello world!" });
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port: ${process.env.PORT}`);
})
