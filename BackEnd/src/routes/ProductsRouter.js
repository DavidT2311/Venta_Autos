import { Router } from "express";
import { getProducts } from "../controller/ProductsController.js";
import { createProducts } from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/createProducts", createProducts)

export default productsRouter;
