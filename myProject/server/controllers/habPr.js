import { HabPrModel } from "../models/habPr.js";

export const getAllHabPr = async (req, res) => {
  const habP = await HabPrModel.findAll();
  return res.send({ habP });
};
