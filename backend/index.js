
import express from 'express';
import dotenv from "dotenv";
import connectToDataBase from './db/connect.js';

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

connectToDataBase();

dotenv.config()

const PORT = process.env.PORT || 6000;
 

//defining route
app.use('/book', bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})