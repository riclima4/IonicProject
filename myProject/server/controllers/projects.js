import { ProjectsModel } from "../models/projects.js";

export const getAllProjects = async (req, res) => {
  const projetos = await ProjectsModel.findAll();
  return res.send({ projetos });
};
export const getAllProjectsNotHidden = async (req, res) => {
  const projetos = await ProjectsModel.findAll({ where: { hidden: false } });
  return res.send({ projetos });
};
export const newProject = async (req, res) => {
  const newProject = {
    titulo: req.body.titulo,
    desc: req.body.desc,
  };
  await ProjectsModel.create(newProject).then(res.send("Project created"));
};
export const deleteProject = async (req, res) => {
  const id = req.params.id;
  const Projects = await ProjectsModel.findByPk(id);
  if (Projects !== null) {
    Projects.destroy({ where: { id: id } });
    return res.send("Project  Deleted");
  } else {
    return res.send("Não existe Projects com id: " + id);
  }
};
export const updateProject = async (req, res) => {
  const id = req.params.id;
  const ProjectUpdated = {
    titulo: req.body.titulo,
    desc: req.body.desc,
    hidden: req.body.hidden,
  };
  console.log(ProjectUpdated);
  const Projects = await ProjectsModel.findByPk(id);
  if (Projects !== null) {
    Projects.update(ProjectUpdated);
    return res.send("Projects  Updated");
  } else {
    return res.send("Não existe Projects com id: " + id);
  }
};
