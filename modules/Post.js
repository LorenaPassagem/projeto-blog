//Essa constante guarda o arquivo db
const db = require('./db');

//Criando a tabela define('nome da tabela', {campo: type})
const Post = db.sequelize.define('postagens', 
{
  titulo: {
      type:db.Sequelize.STRING
  },
  conteudo: { 
      type:db.Sequelize.TEXT
  }

})

// tem que ter so primeira vez que executa depois apagar
//Post.sync({force: true})