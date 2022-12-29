import Router from "express";
import { getAllHabAc } from "../controllers/habAc.js";
import { getAllHabPr } from "../controllers/habPr.js";

const routes = Router();

routes.get("/habAc", getAllHabAc);

export { routes };
