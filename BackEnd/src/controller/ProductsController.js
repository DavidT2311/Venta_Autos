import { ProductsModel } from "../models/conection.js";

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find());

export const createProducts = async (req, res) => {
  const newProduct = await ProductsModel.create(req.body);
  res.send(newProduct);
};