import { ProductsModel } from "../models/conection.js";

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find());

export const updateProducts = async (req, res) => {
  const _id = req.params.id;
  const {
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = req.body;

  const product = {
    _id,
    title,
    price,
    description,
    category,
    image,
    rate,
    count,
  };

  const resultado = await ProductsModel.updateOne(
    { _id: _id },
    { $set: product }
  );

  res.send(resultado);
};

export const deleteProducts = async (req, res) =>
  ProductsModel.deleteOne({ _id: req.params.id });
