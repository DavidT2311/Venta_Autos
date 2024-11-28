import { ProductsModel } from "../models/conection.js";

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find());
