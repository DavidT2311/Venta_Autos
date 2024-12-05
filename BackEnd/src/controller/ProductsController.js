import { ProductsModel } from "../models/conection.js";
import jwt from "jsonwebtoken";

const secret = "HolaMundo";

export const getTokenByUser = (req, res) => {
  const { username, password } = req.body;

  if (!(username || password))
    return res.send({
      error: "Debes llenar los campos",
    });

  if (!(username == "admin" && password == "admin"))
    return res.send({ error: "Credenciales invalidas" });

  const token = jwt.sign({ username }, secret, { expiresIn: "2m" });

  return res.json({ token });
};

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find().sort({ _id: -1 }));

export const createProducts = async (req, res) => {
  const newProduct = await ProductsModel.create(req.body);
  res.send(newProduct);
};

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
  res.send(await ProductsModel.deleteOne({ _id: req.params.id }));
