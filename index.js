const express = require("express");
const app = express();
const handlebars = require('express-handlebars');



  //ESSE CODIGO TEM VIR NO INICIO DAS ROTASSSSSS
  app.use(express.urlencoded({extended:false}));

 //Routes
    app.get('/cad', function(req, res){
      console.log(req.body)
      res.render('formulario')

    });

    app.post('/add', function(req, res){
      //console.log(req.body)
      res.send(`Titulo: ${req.body.title} Conteudo: ${req.body.content}`)
    });

//Body Parser
 
 

//Config
 //Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');


app.listen(8888, function(){
    console.log("SERVER RUN!!!!");
});