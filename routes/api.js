const express = require('express');
const router  = express.Router();


//return all todo nodes
router.get('/todo',function(req,res){
    //TODO: return all notes from db
    res.send({'request-type':'GET','request-url':req.url.toString()});
});

//add new note from the data present in body
router.post('/todo',function(req,res){
    res.send({'request-type':'POST','data':req.body});
});

//update note with given id, from the data present in body
router.put('/todo/:id',function(req,res){
    res.send({'request-type':'POST','id':req.params.id,'data':req.body});
});

//delete note with given id
router.delete('/todo/:id',function(req,res){
    res.send({'request-type':'DELETE','request-url':req.url.toString()});
});

module.exports=router;
