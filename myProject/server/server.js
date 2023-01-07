// Importar node packages
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config.js";
import { routes } from "./routes/index.js";
import { dbInstance } from "./config/db.js";

//TODO: ROUTES VÃO SER COLOCADOS AQUI!
//--REST SERVER--//
const app = express();

// client can be postman | react website | react localhost link | etc
const clientURL = "*";

// CORS options
const corsOptions = {
  origin: clientURL,
};

app.use(cors(corsOptions));
// output dados de pedido HTTP - logger
app.use(morgan("short"));

// parse dados dos pedidos no content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--ROUTES--//

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

try {
  dbInstance.sync({ force: false, alter: true });
} catch (error) {
  console.log(error);
}

// correr server no url host:port definido em .env
// app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
//   console.log(
//     "Server up and running at http://%s:%s",
//     process.env.SERVER_HOST,
//     process.env.SERVER_PORT
//   );
// });
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;
