import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sequelize_orm_project", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;