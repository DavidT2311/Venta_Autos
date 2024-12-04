import { Router } from "express";
import {
  getProducts,
  updateProducts,
  deleteProducts,
  createProducts
} from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/createProducts", createProducts)
productsRouter.put("/updateProducts/:id", updateProducts);
productsRouter.delete("/deleteProducts/:id", deleteProducts);

export default productsRouter;
