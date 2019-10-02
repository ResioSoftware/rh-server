const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const TipoRecado = sequelize.define('TipoRecado', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        }
    }, {
        tableName: 'TipoRecado'
    })
    
    return TipoRecado
}
