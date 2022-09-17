var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    coords: {
        lat: {
            type: String,
            required: true
        },
        lng: {
            type: String,
            required: true
        }
    },
    mapType: {
        type: String,
        required: true
    },
    name: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;