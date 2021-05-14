// Conexão com o banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog','root','lo12re34na56@',
{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}