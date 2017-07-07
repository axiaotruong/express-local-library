var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/mydb';
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema(
    {
        a_string: String,
        a_date: Date
    }
);

var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({
    name: 'awesome'
});

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
    if (err) return handleError(err);
    //saved!
});