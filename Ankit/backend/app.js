import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import cors from "cors";

import router from "./routes/router.js";

const app = express();
const port = process.env.PORT;
//const DATABASE_URL = process.env.DATABASE_URL;
const DB = process.env.MONGO_URL;
// CORS Policy
app.use(cors());

// Database Connection
//connectDB(DATABASE_URL)
mongoose.connect(DB, {
   useNewUrlParser: true,
   useUnifiedTopology: true },
   ()=>{
    console.log("connected successfully")
   });
 //mongoose
//.connect(DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//  })
//  .then(() => console.log("connection start"))
//  .catch((error) => console.log(error.message));
// 
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
