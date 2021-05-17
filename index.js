const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
//Const recebe o arquivo 'Post'
const post = require('./models/db')

//ESSE CODIGO TEM VIR NO INICIO DAS ROTASSSSSS
app.use(express.urlencoded({extended:false}));

 //Routes
    app.get('/cad', function(req, res){
      console.log(req.body)
      res.render('formulario')
    });

    app.post('/add', function(req, res){
      post.create({
        titulo: req.body.title,
        conteudo: req.body.content
      }).then(function(){
        res.send("Post was created")
      }).catch(function(erro){
        res.send(erro + "Find out error")
      })
    });

//Body Parser
//Config
 //Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');


app.listen(8888, function(){
    console.log("SERVER RUN!!!!");
});