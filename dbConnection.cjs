
const { MongoClient } = require('mongodb')

let dbConnection

function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://ajithv:12345@cluster0.9ddzcb5.mongodb.net/SignIn?retryWrites=true&w=majority').then(function (client) {
        dbConnection = client.db()
        callBack()
    }).catch(function (error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = { connectToDb, getDb }
