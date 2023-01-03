import { ProjectsModel } from "../models/projects.js";

export const getAllProjects = async (req, res) => {
  const projetos = await ProjectsModel.findAll();
  return res.send({ projetos });
};
export const newProject = async (req, res) => {
  const newProjects = req.newProjectData;
  await ProjectsModel.create(newProjects);

  res.send({ newProjects });
};
