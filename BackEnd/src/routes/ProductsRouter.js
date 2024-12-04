import { Router } from "express";
import { getProducts, createProducts} from "../controller/ProductsController.js";


const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/createProducts", createProducts)

export default productsRouter;
