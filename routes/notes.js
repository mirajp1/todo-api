const express = require('express');
const router  = express.Router({mergeParams:true});
const Note = require('../models/note');
const List = require('../models/list');

//return all todo nodes for this list
router.get('/',function(req,res,next){
    // res.send(req.params.list_id);
    List.findOne({_id:req.params.list_id}).then(function(data){
        res.send(data.notes);
    }).catch(next);
});

//add new note to the given list from the data present in body
router.post('/',function(req,res,next){

    List.findOne({_id:req.params.list_id}).then(function(list){
        list.notes.push(req.body);
        list.save().then(function(data){
            res.send(data.notes[data.notes.length-1]);
        })
    }).catch(next);

    // List.findOneAndUpdate({_id:req.params.list_id},{$push:{notes:req.body}}).then(function(){
        // List.findOne({_id:req.params.list_id}).then(function(data){
            // res.send(data.notes[data.notes.length-1]);
        // }).catch(next);
    // }).catch(next);
});

//update note with given id, from the data present in body
router.put('/:note_id',function(req,res,next){

    List.findOne({_id:req.params.list_id}).then(function(list){
        list.notes.id(req.params.note_id).text=req.body.text;
        list.save().then(function(data){
            res.send(data.notes.id(req.params.note_id));
        }).catch(next);
    }).catch(next);

    // List.findOneAndUpdate({_id:req.params.list_id,"notes._id":req.params.note_id},{$set:{"notes.$":req.body}}).then(function(data){
    //     console.log(data);
    //     List.findOne({notes:{$elemMatch:{_id:req.params.note_id}}}).then(function(data){
    //         res.send(data.notes[data.notes.length-1]);
    //     }).catch(next);
    //
    // }).catch(next);

});

//delete note with given id
router.delete('/:note_id',function(req,res,next){
    List.findOneAndUpdate({_id:req.params.list_id},{$pull:{"notes":{_id:req.params.note_id}}}).then(function(data){
        res.send(data.notes.id(req.params.list_id));
    }).catch(next);
});

module.exports=router;
