const Sequelize = require("sequelize")
const configDatabase = require("./database")

const sequelize = new Sequelize(configDatabase)

async function conectado() {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar com a base de dados:', error);
    }
}

module.exports = { sequelize, conectado }