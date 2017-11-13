const express = require('express');
const router  = express.Router();
const Note = require('../models/note');

//return all todo nodes
router.get('/todo',function(req,res,next){
    Note.find({}).then(function(data){
        res.send(data);
    }).catch(next);
});

//add new note from the data present in body
router.post('/todo',function(req,res,next){
    Note(req.body).save().then(function(data){
        res.send(data);
    }).catch(next);
});

//update note with given id, from the data present in body
router.put('/todo/:id',function(req,res,next){

    Note.findOneAndUpdate({_id:req.params.id},req.body).then(function(){

        //return updated data instead of all data in this callback
        Note.find({_id:req.params.id}).then(function(data){
            res.send(data);
        }).catch(next);

    }).catch(next);
});

//delete note with given id
router.delete('/todo/:id',function(req,res,next){
    Note.findByIdAndRemove({_id:req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
});

module.exports=router;
