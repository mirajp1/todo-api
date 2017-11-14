const mongoose=require('mongoose');
const NoteSchema = require('./note');

const ListSchema=mongoose.Schema({
    title:{
        type:String,
        required:'List cannot be created without a title!'
    },
    notes:{
        type:[NoteSchema]
    },
    archived:{
        type:Boolean,
        default:false
    }
});

const List = mongoose.model('list',ListSchema);

module.exports=List;
