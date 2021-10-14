const heroi = (sequelize, DataTypes) => {

    const Heroi = sequelize.define('heroi', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Força: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Velocidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Habilidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Equipamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Inteligência: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Poder: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        })
}
module.exports = heroi