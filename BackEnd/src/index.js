import express from "express";
import cors from "cors";
import productsRouter from "./routes/ProductsRouter.js";
import getConection from "./models/conection.js";

const app = express();
const PORT = process.env.PORT || 3000;

getConection();

app.use(cors())

app.use(express.json());
app.use("/", productsRouter);

app.listen(PORT, () => console.log("Escuchando el puerto", PORT));
