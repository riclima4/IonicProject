import Router from "express";
import { getAllHabAc, getAllHabAcNotHidden } from "../controllers/habAc.js";
import {
  deleteHabPr,
  getAllHabPr,
  getAllHabPrNotHidden,
  newHabPr,
  updateHabPr,
} from "../controllers/habPr.js";
import { getAllIdiomas } from "../controllers/idioma.js";
import {
  deleteSkill,
  getAllProgrammingLang,
  newSkill,
  updateSkill,
} from "../controllers/programmingLang.js";
import {
  deleteProject,
  getAllProjects,
  getAllProjectsNotHidden,
  newProject,
  updateProject,
} from "../controllers/projects.js";

const routes = Router();
// Hab AC
routes.get("/allHabAc", getAllHabAc);
routes.get("/habAc", getAllHabAcNotHidden);
// Hab PR
routes.get("/allHabPr", getAllHabPr);
routes.get("/habPr", getAllHabPrNotHidden);
routes.post("/newHabPr", newHabPr);
routes.delete("/habPr/delete/:id", deleteHabPr);
routes.put("/updateHabPr/:id", updateHabPr);
// Idiomas
routes.get("/idiomas", getAllIdiomas);
// Projects
routes.get("/allProjects", getAllProjects);
routes.get("/projects", getAllProjectsNotHidden);
routes.post("/newProject", newProject);
routes.delete("/projects/delete/:id", deleteProject);
routes.put("/updateProject/:id", updateProject);
// Skills
routes.post("/newSkill", newSkill);
routes.get("/programmingLang", getAllProgrammingLang);
routes.put("/updateSkill/:id", updateSkill);
routes.delete("/skill/delete/:id", deleteSkill);

export { routes };
