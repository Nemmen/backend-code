const mongoose = require('mongoose');

exports.fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})


// new way to exports

const File = mongoose.model('File', exports.fileSchema);

module.exports = File;
