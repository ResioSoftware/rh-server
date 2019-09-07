const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Salario = sequelize.define('Salario', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        dataInicial: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        dataFinal: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        salario: {
            type: DataTypes.DOUBLE,
        },
        motivo: {
            type: DataTypes.STRING,
        },
        justificativa: {
            type: DataTypes.STRING
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Salario'
    })

    Salario.associate = models => {
        Salario.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'SalarioId'})
    }

    return Salario
}
