import { Router } from "express";
import { getProducts } from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);

export default productsRouter;
