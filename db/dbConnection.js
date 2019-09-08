const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://markAdmin:Aa123456@tipoutdb-rhcqq.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function(){ console.log('[+] Connected to mongoDB')});

module.exports = mongoose;