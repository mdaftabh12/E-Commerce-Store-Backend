// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Utiles
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the aftab store</h1>`);
});

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "uploads")));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
