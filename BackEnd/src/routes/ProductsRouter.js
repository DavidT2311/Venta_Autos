import { Router } from "express";
import {
  getProducts,
  updateProducts,
  deleteProducts,
  createProducts,
  getTokenByUser,
} from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/getTokenByUser", getTokenByUser);
productsRouter.post("/createProduct", createProducts);
productsRouter.put("/updateProduct/:id", updateProducts);
productsRouter.delete("/deleteProduct/:id", deleteProducts);

export default productsRouter;
