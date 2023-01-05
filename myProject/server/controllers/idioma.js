import { IdiomaModel } from "../models/idioma.js";

export const getAllIdiomas = async (req, res) => {
  const idiomas = await IdiomaModel.findAll();
  return res.send({ idiomas });
};
export const newIdioma = async (req, res) => {
  const newIdioma = {
    idioma: req.body.idioma,
    nivel: req.body.nivel,
  };
  await IdiomaModel.create(newIdioma).then(res.send("Idioma created"));
};
export const deleteIdioma = async (req, res) => {
  const id = req.params.id;
  const Idioma = await IdiomaModel.findByPk(id);
  if (Idioma !== null) {
    Idioma.destroy({ where: { id: id } });
    return res.send("Idioma Deleted");
  } else {
    return res.send("Não existe Idioma com id: " + id);
  }
};
export const updateIdioma = async (req, res) => {
  const id = req.params.id;
  const IdiomaUpdated = {
    idioma: req.body.idioma,
    nivel: req.body.nivel,

  };
  console.log(IdiomaUpdated);
  const Idioma = await IdiomaModel.findByPk(id);
  if (Idioma !== null) {
    Idioma.update(IdiomaUpdated);
    return res.send("Idioma Updated");
  } else {
    return res.send("Não existe Idioma com id: " + id);
  }
};