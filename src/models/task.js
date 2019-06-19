const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:  String,
    last_name: String,
    disability:  String,
    attendant: String,
    address: String,
    age: Number,
    nota: {
        type: Number,
        default: 0.0
    },
    sexo:{
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks',TaskSchema);