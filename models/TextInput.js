const mongoose = require('mongoose')

var TextInput = mongoose.model('TextInput',
{
    title : {type:String},
    message : {type:String},
},'TextInputs')

module.exports = { TextInput }