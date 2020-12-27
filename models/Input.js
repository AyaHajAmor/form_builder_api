const mongoose = require('mongoose')

var Input = mongoose.model('Input',
{
    question :{type: String},
    type : ["Input_Text", 
            "Input_Number",
            "Input_Email",
            "Dropdown",
            "CheckBoxes",
            "Multiple_Choice"
        ],
    options: [{type:String}],
    idform :{type:String}
},'Inputs')

module.exports = { Input }

