import { ProgrammingLangModel } from "../models/programmingLang.js";

export const getAllProgrammingLang = async (req, res) => {
  const progLang = await ProgrammingLangModel.findAll();
  return res.send({ progLang });
};
