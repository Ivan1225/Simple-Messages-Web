const filename = '/home/izhang/Workspace/Assignment_1/api/data/data.json'
let messages = require(filename)
const helper = require('../helpers/helper.js')

function getMessages() {
    return new Promise((resolve, reject) => {
        if (messages.length === 0) {
            reject({
                message: 'no messages available',
                status: 202
            })
        }
        resolve(messages)
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
        helper.writeJSONFile(filename, messages)
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
            helper.writeJSONFile(filename, messages)
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
            helper.writeJSONFile(filename, mess)
            resolve(mess)
        })
        .catch(err => reject(err))
    })
}
module.exports = {
    insertMessage,
    getMessages,
    getMessage,
    updateMessage,
    deleteMessage
}