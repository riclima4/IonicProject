import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const IdiomaModel = dbInstance.define("idioma", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idioma: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  nivel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
export { IdiomaModel };
