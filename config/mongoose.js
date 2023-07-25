// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/codeial_development');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });


// module.exports = db;
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/db_name');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection problem'));

db.on('open', function(){
    console.log("Connected to MongoDB Successfully")
})

module.exports = db;