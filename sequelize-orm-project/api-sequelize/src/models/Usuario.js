import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Usuario = sequelize.define("Usuario", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

export default Usuario;