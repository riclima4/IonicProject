import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const ProgrammingLangModel = dbInstance.define("progLang", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  image: {
    type: Sequelize.BLOB("tiny"),
    allowNull: true,
  },
});
export { ProgrammingLangModel };
