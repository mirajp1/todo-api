const express=require('express');
const config=require('./config')[process.env.NODE_ENV || 'development'];
const routes=require('./routes/api');
const bodyParser=require('body-parser');

var app=express();


//bodyParser middleware to parser json data passed
app.use(bodyParser.json());

//use api.js file for routing
app.use('/api',routes);

//middleware for handling errors ,404,500,etc
app.use(function(req,res){
    //TODO: handle various types of errors
    res.status(404).send('404 error');
});




//listen for incoming requests
app.listen(config['server'].port,function(){
    console.log('listening at port: '+config['server'].port);
});
