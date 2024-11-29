const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const router = require('./routes/route');
app.use('/',router);

const connectToDb = async()=> {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/civilloan',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connected to db successfully');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectToDb();

const port = 3010;
app.listen(port,()=>{
    console.log(`app started on port ${port}`);
})