const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://AyaHajAmor:AFcVYaDDyjfYWVuM@cluster0.cycok.mongodb.net/Form?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology:true }, err => {
  if (!err) {
    console.log('>----------------------- Connected To Database -----------------------<')
    return
  }
  console.log(err)
})
