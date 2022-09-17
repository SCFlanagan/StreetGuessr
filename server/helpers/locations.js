const db = require('../models');
const data = require('./locationsData');
const Location = require('../models/location');

exports.getFiveRandomLocations = (req, res) => {
    const mapType = (req.params.mapType === 'world') ? 'World' : 'Famous Places';
    db.Location.find({ mapType: mapType })
        .then(locations => {
            let locationArr = [];
            for (let i = 0; i < 5; i++) {
                let randomIndex = Math.floor(Math.random() * locations.length);
                let location = locations.splice(randomIndex, 1);
                locationArr.push(location[0]);
            }
            res.json(locationArr);
        })
        .catch(err => {
            res.send(err);
        })
}

/*

FOR DEVELOPMENT:

exports.loadData = async (req, res) => {
    let locations = await db.Location.find();
    locations.forEach(async location => {
        await db.Location.deleteOne({ _id: location._id })
    });
    locations = await Location.create(data.locations);
    res.json(locations);
}

exports.getLocations = (req, res) => {
    db.Location.find()
        .then(function (locations) {
            res.json(locations)
        })
        .catch(function (err) {
            res.send(err)
        })
}

exports.createLocation = function (req, res) {
    db.Location.create(req.body)
        .then((newLocation) => {
            res.status(201).json(newLocation)
        })
        .catch((err) => {
            res.send(err)
        })
}

exports.getLocation = function (req, res) {
    db.Location.findById(req.params.locationId)
        .then((foundLocation) => {
            res.json(foundLocation)
        })
        .catch((err) => {
            res.send(err)
        })
}

exports.updateLocation = function (req, res) {
    db.Location.findOneAndUpdate({ _id: req.params.locationId }, req.body)
        .then((location) => {
            res.json(location)
        })
        .catch((err) => {
            res.send(err)
        })
}

exports.deleteLocation = function (req, res) {
    db.Location.remove({ _id: req.params.locationId })
        .then(() => {
            res.json({ message: 'It has been deleted.' })
        })
        .catch((err) => {
            res.send(err)
        })
}
*/


module.exports = exports;