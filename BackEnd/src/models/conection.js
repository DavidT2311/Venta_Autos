import mongoose, { Schema } from "mongoose";

const getConection = () =>
  mongoose.connect("mongodb://127.0.0.1:27017/Products");

const productsSchema = new Schema({
  _id: String,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating:  {
    rate: Number,
    count: Number,
    },
});

export const ProductsModel = mongoose.model("products", productsSchema);

export default getConection;
