const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Resultado = sequelize.define(
        'Resultado',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            bimestre: {
                type: DataTypes.ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'),
                allowNull: false,
            },
            disciplina: {
                type: DataTypes.ENUM('Biologia', 'Artes', 'Geografia', 'Sociologia'),
                allowNull: false,
                unique: 'disciplina_bimestre_unique',
            },
            nota: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 10,
                },
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                }
            },
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['disciplina', 'bimestre'],
                    name: 'disciplina_bimestre_unique',
                },
            ],
            tableName: 'resultado',
            timestamps: true,
        }

    );


    return Resultado;
}