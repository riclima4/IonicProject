import Router from "express";
import { getAllHabAc } from "../controllers/habAc.js";
import { getAllHabPr } from "../controllers/habPr.js";
import { getAllIdiomas } from "../controllers/idioma.js";
import { getAllProgrammingLang } from "../controllers/programmingLang.js";
import { getAllProjects, newProject } from "../controllers/projects.js";

const routes = Router();

routes.get("/habAc", getAllHabAc);
routes.get("/habPr", getAllHabPr);
routes.get("/idiomas", getAllIdiomas);
routes.get("/projects", getAllProjects);
routes.post("/newProject", newProject);
routes.get("/programmingLang", getAllProgrammingLang);

export { routes };
