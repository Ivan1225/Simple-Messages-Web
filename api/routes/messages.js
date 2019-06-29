var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
const Messages = require('../data/messages');

router.get('/', async (req, res) => {
    await Messages.find()
    .then(messages => res.json({messages}))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ error: err.message })
        } else {
            res.status(500).json({ error: err.message })
        }
    })
})

router.post('/', async (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    let message = new Messages();

    message.content = content;
    await message.save()
        .then(message => res.json({message}))
        .catch(err => res.status(500).json({ error: err.message }))
});
// router.post('/', async (req, res) => {
//     await message.insertMessage(req.body)
//     .then(message => res.status(201).json({
//         message,
//     }))
//     .catch(err => res.status(500).json({ message: err.message }))
// })

router.put('/:id', async (req, res) => {
    console.log(req)
    const objectId = mongoose.Types.ObjectId(req.params.id)
    await Messages.updateOne({_id: objectId}, { $set: {content: req.body.content}})
        .then(message => res.json({
            message,
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ error: err.message })
            }
            res.status(500).json({ error: err.message })
        })
})

router.delete('/:id', async (req, res) => {
    const objectId = mongoose.Types.ObjectId(req.params.id)
    await Messages.deleteOne({_id: objectId})
        .then(message => res.json({
            message,
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ error: err.message })
            }
            res.status(500).json({ error: err.message })
        })
})

module.exports = router;