import sequelize from "./database/index.js";
import Usuario from "./models/Usuario.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco!");

    await sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas!");

    const usuario = await Usuario.create({
      nome: "Gabrieli",
      email: "gabrieli@email.com",
    });

    console.log("Usuário criado:", usuario.toJSON());

    const usuarios = await Usuario.findAll();
    console.log(
      "AAAAAAAAA Usuários:",
      usuarios.map((u) => u.toJSON()),
    );

  } catch (error) {
    console.error("Erro:", error);
  }
}

main();
