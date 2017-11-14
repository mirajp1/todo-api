const express = require('express');
const router  = express.Router();
const List = require('../models/list');
const notesRouter = require('./notes');

//return all lists
router.get('/',function(req,res,next){
    List.find({}).then(function(data){
        res.send(data);
    }).catch(next);
});

//add new list from the data present in body
router.post('/',function(req,res,next){
    List(req.body).save().then(function(data){
        res.send(data);
    }).catch(next);
});

//update list with given id, from the data present in body
router.put('/:list_id',function(req,res,next){

    List.findOneAndUpdate({_id:req.params.list_id},req.body).then(function(){

        //return updated data instead of all data in this callback
        List.find({_id:req.params.list_id}).then(function(data){
            res.send(data);
        }).catch(next);

    }).catch(next);
});

//delete the list with given id
router.delete('/:list_id',function(req,res,next){
    List.findByIdAndRemove({_id:req.params.list_id}).then(function(data){
        res.send(data);
    }).catch(next);
});

//use notes router
router.use('/:list_id/notes',notesRouter);

module.exports=router;
