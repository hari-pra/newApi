const mongoose = require('mongoose');

const requestsSchema = new mongoose.Schema({
    mobile:{
        type:Number
    },
    email:{
        type:String
    },
    amt:{
        type:Number
    },
    type:{
        type:String
    },
    message:{
        type:String
    },
    code:{
        type:String
    }
});

module.exports = mongoose.model('requests',requestsSchema);