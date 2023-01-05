import Router from "express";
import { deleteHabAc, getAllHabAc, getAllHabAcNotHidden, newHabAc, updateHabAc } from "../controllers/habAc.js";
import {
  deleteHabPr,
  getAllHabPr,
  getAllHabPrNotHidden,
  newHabPr,
  updateHabPr,
} from "../controllers/habPr.js";
import { deleteIdioma, getAllIdiomas, newIdioma, updateIdioma } from "../controllers/idioma.js";
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
routes.post("/newHabAc", newHabAc);
routes.delete("/habAc/delete/:id", deleteHabAc);
routes.put("/updateHabAc/:id", updateHabAc);
// Hab PR
routes.get("/allHabPr", getAllHabPr);
routes.get("/habPr", getAllHabPrNotHidden);
routes.post("/newHabPr", newHabPr);
routes.delete("/habPr/delete/:id", deleteHabPr);
routes.put("/updateHabPr/:id", updateHabPr);
// Idiomas
routes.get("/idiomas", getAllIdiomas);
routes.post("/newIdioma", newIdioma);
routes.delete("/idiomas/delete/:id", deleteIdioma);
routes.put("/updateIdioma/:id", updateIdioma);
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
