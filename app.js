var express=require('express');
var config=require('./config')[process.env.NODE_ENV || 'development']

var app=express();

//listen for incoming requests
app.listen(config['server'].port,function(){

    console.log('listening at port: '+config['server'].port);

});
