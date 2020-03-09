const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");

const User = require("./model/user");

mongoose.connect('mongodb://localhost/27017',  { useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex: true });

const app = express ();

app.listen(9005);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/api/user', function(req, res){
    let data = req.body
    User.insertUser(data , function(err, data){
        if(err){
            res.status(500).send(err);

        }else{ 
            res.send(data);
        }
    })

});

app.get('/api/user', function(req, res){
    User.getUsers(function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/api/user/:user', function(req, res){
    User.getUserByName(req.params, function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})


app.put('/api/user/:user', function(req , res){
    User.updateUser(req.params, req.body, function(req, res){
        if (err){
            res.status(500).send(err);

        }else{
            res.send(data);
        }
    })
});

app.delete('/api/user/:id', function(req , res){
    User.deleteUser(req.params.id , function(err, data){
        if (err){
            res.status(500).send(err);

        }else{
            res.send(data);
        }
    })
})