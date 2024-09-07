import express from "express";
import authRoutes from "./routes/auth";
import messageRoutes from "./routes/message";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
