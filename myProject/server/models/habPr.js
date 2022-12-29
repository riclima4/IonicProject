import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const HabPrModel = dbInstance.define("habPr", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nivel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
export { HabPrModel };
