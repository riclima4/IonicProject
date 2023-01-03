import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const ProjectsModel = dbInstance.define("projects", {
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
  image: {
    type: Sequelize.BLOB("tiny"),
    allowNull: true,
  },
  hidden: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
export { ProjectsModel };
