const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
        mobile:{
            type:Number
        },
        email:{
            type:String
        },
        occupation:{
            type:String
        },
        passwd:{
            type:String
        }
});

module.exports = mongoose.model('members',membersSchema);