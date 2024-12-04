import { Router } from "express";
import {
  getProducts,
  updateProducts,
  deleteProducts,
  createProducts,
} from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/createProduct", createProducts);
productsRouter.put("/updateProduct/:id", updateProducts);
productsRouter.delete("/deleteProduct/:id", deleteProducts);

export default productsRouter;
