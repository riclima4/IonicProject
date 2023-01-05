import { HabAcModel } from "../models/habAc.js";

export const getAllHabAc = async (req, res) => {
  const habA = await HabAcModel.findAll();
  return res.send({ habA });
};
export const getAllHabAcNotHidden = async (req, res) => {
  const habA = await HabAcModel.findAll({ where: { hidden: false } });
  return res.send({ habA });
};
