const express=require('express');
const mongoose=require('mongoose');
const List = require('../models/list');
const listsRouter = require('./lists');
const router=express.Router();


router.use('/lists',listsRouter);

module.exports=router;
