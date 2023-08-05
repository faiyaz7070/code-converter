const mongoose  = require('mongoose');


const Connection = mongoose.connect("mongodb+srv://faiyaz:dulraz@cluster0.tohzp.mongodb.net/codeconverter?retryWrites=true&w=majority");

module.exports = {Connection};