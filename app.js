const express=require('express');
const config=require('./config')[process.env.NODE_ENV || 'development'];
const routes=require('./routes');
const bodyParser=require('body-parser');
const db = require('./db.js');

var app=express();

//bodyParser middleware to parser json data passed
app.use(bodyParser.json());

//use api.js file for routing
app.use('/api',routes);

//middleware for handling errors ,404,500,etc
app.use(function(err,req,res,next){
    //TODO: handle various types of errors
    console.log(err);
    res.status(500).send({error:err.message});
});

//listen for incoming requests
app.listen(config['server'].port,function(){
    console.log('listening at port: '+config['server'].port);
});
