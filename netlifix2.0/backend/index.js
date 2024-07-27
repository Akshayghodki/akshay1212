import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));



//api
app.use("/api/v1/user", userRoute);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});










//step 1
//server create

// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";

// databaseConnection();

// dotenv.config({
//   path:".env"
// })

// const app = express();
// //mddlewares
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());

// app.listen(process.env.PORT, () => {
//   console.log(`server is running on port ${process.env.PORT}`);
// })