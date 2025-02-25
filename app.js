import "dotenv/config";
import express from "express";
import salesRouter from "./routes/sales.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/api/sales", salesRouter);

app.listen(PORT, () => {
  console.log("Servidor Web en el puerto:", PORT);
});




