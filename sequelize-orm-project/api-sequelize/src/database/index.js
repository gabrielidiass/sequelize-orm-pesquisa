// src/database/index.js
import { Sequelize } from "sequelize";

// configura a conexão com o banco de dados PostgreSQL
const sequelize = new Sequelize("sequelize_orm_project", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;

