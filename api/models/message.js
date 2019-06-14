const filename = '/home/izhang/Workspace/Assignment_1/api/data/data.json'
let data = require(filename)
const helper = require('../helpers/helper.js')
let {messages} = data

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

function getMessage(id) {
    return new Promise((resolve, reject) => {
        helper.checkExisted(messages, id)
        .then(message => resolve(message))
        .catch(err => reject(err))
    })
}

function insertMessage(newMessage) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(messages) }

        newMessage = { ...id, ...newMessage }
        messages.push(newMessage)
        helper.writeJSONFile(filename, { ...data, messages: messages})
        resolve(newMessage)
    })
}

function updateMessage(id, newMessage) {
    return new Promise((resolve, reject) => {
        helper.checkExisted(messages, id)
        .then(message => {
            const index = messages.findIndex(p => p.id === message.id)
            id = { id: message.id }

            messages[index] = { ...id, ...newMessage }
            helper.writeJSONFile(filename, { ...data, messages: messages})
            resolve(messages[index])
        })
        .catch(err => reject(err))
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        helper.checkExisted(messages, id)
        .then(() => {
            mess = messages.filter(m => m.id !== id)
            helper.writeJSONFile(filename, { ...data, messages: mess})
            resolve()
        })
        .catch(err => reject(err))
    })
}
module.exports = {
    insertMessage,
    getMessages,
    getMessage,
    updateMessage,
    deleteMessage,
}