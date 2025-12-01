
// @ts-nocheck
import counterRoutes from "./routes/counter.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/counter", counterRoutes);

mongoose.connect(process.env.MONGO_URI || "").then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
