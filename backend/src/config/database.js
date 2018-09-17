const mongoose = require('mongoose')
mongoose.Promise = global.Promise


module.exports = mongoose.connect('mongodb://admin:gugaxx29@ds151382.mlab.com:51382/291098')
