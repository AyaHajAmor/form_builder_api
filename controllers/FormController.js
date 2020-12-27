const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId
var { Input } = require('../models/Input')
var { Form } = require('../models/Form')


//-------------------------- form ---------------------------

router.get('/AllForms', (req, res) => {
    Form.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all Forms : ' + JSON.stringify(err, undefined, 2))
    })
})

router.get('/OneForm/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No form with given id : ' + req.params.id)
    Form.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving a form : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/AllForms', (req, res) => {
    var newForm= new Form({
        title: req.body.title,
        description: req.body.description
    })
    newForm.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new Form : ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No form with given id : ' + req.params.id)
    Form.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a form : ' + JSON.stringify(err, undefined, 2))
    })
})


//-------------------------- Input ---------------------------
router.get('/:idform', (req, res) => {
    if (!ObjectID.isValid(req.params.idform))
        return res.status(400).send('No form with given id : ' + req.params.idform)
    Form.findById(req.params.idform, (err, docs) => {
        if (!err) {
            Input.find((err,docs) =>{
                if(!err) res.send(docs)
            }
            )
            }
        else console.log('Error while retrieving all Inputs : ' + JSON.stringify(err, undefined, 2))
    })
})
router.post('/AddInput', (req, res) => {
    var newInput= new Input({
        question:req.body.question,
        type : req.body.type,
        options: req.body.options,
        idform: req.body.idform
    })
    newInput.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while adding a Input : ' + JSON.stringify(err, undefined, 2))
    })
})
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No input with given id : ' + req.params.id)
    Input.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a Input: ' + JSON.stringify(err, undefined, 2))
    })
})
module.exports = router