import { IdiomaModel } from "../models/idioma.js";

export const getAllIdiomas = async (req, res) => {
  const idiomas = await IdiomaModel.findAll();
  return res.send({ idiomas });
};
