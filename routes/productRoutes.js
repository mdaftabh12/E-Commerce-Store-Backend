import express from "express";
import formidable from "express-formidable";
const router = express.Router();

// controllers
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

router.route("/").get(fetchProducts).post(
  authenticate,
  authorizeAdmin,
  upload.single("image"), // Handle file upload with multer
  addProduct
);

router.route("/allProducts").get(fetchAllProducts);
router
  .route("/:id/reviews")
  .post(authenticate, authorizeAdmin, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, removeProduct);

export default router;
