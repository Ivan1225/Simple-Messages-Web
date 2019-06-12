var express = require("express");
var router = express.Router();
const message = require('../models/message.js')
const validate = require('../helpers/validate')

router.get('/', async (req, res) => {
  await message.getMessages()
  .then(messages => res.json(messages))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      } else {
          res.status(500).json({ message: err.message })
      }
  })
})

router.get('/:id', validate.mustBeInteger, async (req, res) => {
    const id = parseInt(req.params.id, 10)
    await message.getMessage(id)
    .then(message => res.json(message))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/', async (req, res) => {
    await message.insertMessage(req.body)
    .then(message => res.status(201).json({
        message: `The message #${message.id} has been created`,
        content: message
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', validate.mustBeInteger, async (req, res) => {
    const id = parseInt(req.params.id, 10)
    await message.updateMessage(id, req.body)
    .then(message => res.json({
        message: `The message #${id} has been updated`,
        content: message
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

router.delete('/:id', validate.mustBeInteger, async (req, res) => {
    const id = parseInt(req.params.id, 10)

    await message.deleteMessage(id)
    .then(message => res.json({
        message: `The message #${id} has been updated`,
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router;