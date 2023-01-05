import { HabPrModel } from "../models/habPr.js";

export const getAllHabPr = async (req, res) => {
  const habP = await HabPrModel.findAll();
  return res.send({ habP });
};
export const getAllHabPrNotHidden = async (req, res) => {
  const habP = await HabPrModel.findAll({ where: { hidden: false } });
  return res.send({ habP });
};
export const newHabPr = async (req, res) => {
  const newHabPr = {
    titulo: req.body.titulo,
    tempo: req.body.tempo,
    desc: req.body.desc,
    hidden: req.body.hidden,
  };
  await HabPrModel.create(newHabPr).then(res.send("HabPr created"));
};
export const updateHabPr = async (req, res) => {
  const id = req.params.id;
  const HabPrUpdated = {
    titulo: req.body.titulo,
    desc: req.body.desc,
    tempo: req.body.tempo,
    hidden: req.body.hidden,
  };
  console.log(HabPrUpdated);
  const HabPr = await HabPrModel.findByPk(id);
  if (HabPr !== null) {
    HabPr.update(HabPrUpdated);
    return res.send("HabPr Updated");
  } else {
    return res.send("Não existe HabPr com id: " + id);
  }
};
export const deleteHabPr = async (req, res) => {
  const id = req.params.id;
  const HabPr = await HabPrModel.findByPk(id);
  if (HabPr !== null) {
    HabPr.destroy({ where: { id: id } });
    return res.send("HabPr Deleted");
  } else {
    return res.send("Não existe HabPr com id: " + id);
  }
};
