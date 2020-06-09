const mongoose = require('mongoose');

// iguala a promise do mongoose com a promise do Node.js
// para evitar warnnings no console
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb+srv://cviniciusc:andx2f293293@cluster0-ywl69.mongodb.net/react-db?retryWrites=true&w=majority', { useNewUrlParser : true, useUnifiedTopology: true});