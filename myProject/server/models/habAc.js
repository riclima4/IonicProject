import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const HabAcModel = dbInstance.define("habAc", {
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
    defaultValue: 0,
  },
  hidden: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
export { HabAcModel };
