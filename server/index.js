import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

dotenv.config();
let port = process.env.SERVER_PORT;

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
