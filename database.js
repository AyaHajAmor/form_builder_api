const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ManageFormDB', { useNewUrlParser: true , useUnifiedTopology:true }, err => {
  if (!err) {
    console.log('>----------------------- Connected To Database -----------------------<')
    return
  }
  console.log(err)
})
