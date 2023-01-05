import { ProgrammingLangModel } from "../models/programmingLang.js";

export const getAllProgrammingLang = async (req, res) => {
  const progLang = await ProgrammingLangModel.findAll();
  return res.send({ progLang });
};
export const newSkill = async (req, res) => {
  const newSkill = {
    nome: req.body.nome,
  };
  await ProgrammingLangModel.create(newSkill).then(res.send("Skill created"));
};
export const updateSkill = async (req, res) => {
  const id = req.params.id;
  const SkillUpdated = {
    nome: req.body.nome,
  };
  console.log(SkillUpdated);
  const Skill = await ProgrammingLangModel.findByPk(id);
  if (Skill !== null) {
    Skill.update(SkillUpdated);
    return res.send("Skill  Updated");
  } else {
    return res.send("Não existe Skill com id: " + id);
  }
};
export const deleteSkill = async (req, res) => {
  const id = req.params.id;
  const Skill = await ProgrammingLangModel.findByPk(id);
  if (Skill !== null) {
    Skill.destroy({ where: { id: id } });
    return res.send("Skill  Deleted");
  } else {
    return res.send("Não existe Projects com id: " + id);
  }
};
