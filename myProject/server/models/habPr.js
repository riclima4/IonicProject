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
  tempo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  hidden: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
export { HabPrModel };
