const mongoose = require('mongoose')

var Form = mongoose.model('Form',
{
    title : {type:String},
    description : {type:String},
},'Forms')

module.exports = { Form }