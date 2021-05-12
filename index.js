const express = require("express");
const app = express();
const handlebars = require('express-handlebars');

// Conexão com o banco de dados
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize('','root','lo12re34na56@',
  {
    host: 'localhost',
    dialect: 'mysql'
  });

 //Routes
    app.get('/cad', function(req, res){
      console.log(req.body)
      res.render('formulario')

    });

    app.post('/add', function(req, res){
      //console.log(req.body)
      res.send(`Texto: ' + ${req.body.content}`)
    });

//Body Parser
  //app.use(express.json()); 
  app.use(express.urlencoded({extended:true}));
 

//Config
 //Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');


app.listen(8888, function(){
    console.log("SERVER RUN!!!!");
});