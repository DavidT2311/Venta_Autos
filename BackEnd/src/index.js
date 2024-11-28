import express from "express";
import productsRouter from "./routes/ProductsRouter.js";
import getConection from "./models/conection.js";

const app = express();
const PORT = process.env.PORT || 3000;

getConection();

app.use(express.json());
app.use("/", productsRouter);

app.listen(PORT, () => console.log("Escuchando el puerto", PORT));
