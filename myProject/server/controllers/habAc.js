import { HabAcModel } from "../models/habAc.js";

export const getAllHabAc = async (req, res) => {
  const habA = await HabAcModel.findAll();
  return res.send({ habA });
};
export const getAllHabAcNotHidden = async (req, res) => {
  const habA = await HabAcModel.findAll({ where: { hidden: false } });
  return res.send({ habA });
};
export const newHabAc = async (req, res) => {
  const newHabAc = {
    titulo: req.body.titulo,
    nivel: req.body.nivel,
    desc: req.body.desc,
    hidden: req.body.hidden,
  };
  await HabAcModel.create(newHabAc).then(res.send("HabAc created"));
};
export const deleteHabAc = async (req, res) => {
  const id = req.params.id;
  const HabAc = await HabAcModel.findByPk(id);
  if (HabAc !== null) {
    HabAc.destroy({ where: { id: id } });
    return res.send("HabAc  Deleted");
  } else {
    return res.send("Não existe HabAc com id: " + id);
  }
};
export const updateHabAc = async (req, res) => {
  const id = req.params.id;
  const HabAcUpdated = {
    titulo: req.body.titulo,
    desc: req.body.desc,
    nivel: req.body.nivel,
    hidden: req.body.hidden,
  };
  console.log(HabAcUpdated);
  const HabAc = await HabAcModel.findByPk(id);
  if (HabAc !== null) {
    HabAc.update(HabAcUpdated);
    return res.send("HabAc Updated");
  } else {
    return res.send("Não existe HabAc com id: " + id);
  }
};
