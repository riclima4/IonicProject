import { ProjectsModel } from "../models/projects.js";

export const getAllProjects = async (req, res) => {
  const projetos = await ProjectsModel.findAll();
  return res.send({ projetos });
};
