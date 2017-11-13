const mongoose=require('mongoose');
const config=require('./config')[process.env.NODE_ENV || 'development'];

//connect to mongoDB
mongoose.connect('mongodb://'+
                config['database'].user+
                ':'+
                config['database'].password+
                '@'+
                config['database'].host+
                ':'+
                config['database'].port+
                '/'+
                config['database'].db
            );

//listening to connection listener
mongoose.connection.once('open',function(){
    console.log('connected to db!');
}).on('error',function(err){
    console.log('DB error:' +err);
});

//mongoose's promise is deprecated so setting default of es6
mongoose.Promise=global.Promise;
