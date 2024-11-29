const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    type:{
        type:String
    },
    code:{
        type:String
    },
    description:{
        type:String
    },
    imgUrl:{
        type:String
    },
    detail:{
        type:Array
    }
});

module.exports = mongoose.model('services',serviceSchema);