const Sequelize = require('sequelize');

module.exports = {
    name: 'Livro',
    properties: {
        id: {
            field: 'id_auto',
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false, 
        },

        titulo: Sequelize.STRING,
        preco: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
    }, 
    options: {
        //tableName: 'livros',
        //
        timestamps: false,
        freezeTableName: true,
    }
};