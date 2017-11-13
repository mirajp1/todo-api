const mongoose = require('mongoose');

var NoteSchema=mongoose.Schema({
    text:{
        type:String,
        required: 'Cannot create note without data!'
    },
    archived:{
        type:Boolean,
        default: false
    }
});

var Note = mongoose.model('note',NoteSchema);

module.exports=Note;
