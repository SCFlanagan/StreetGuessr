const express = require('express'),
    router = express.Router(),
    locations = require('../helpers/locations');


router.route('/random/:mapType')
    .get(locations.getFiveRandomLocations)

/* 
FOR DEVELOPMENT:

router.route('/loaddata')
    .get(locations.loadData)

router.route('/')
    .get(helpers.getLocations)
    .post(helpers.createLocation)

router.route('/:locationId')
    .get(helpers.getLocation)
    .put(helpers.updateLocation)
    .delete(helpers.deleteLocation) 
*/

module.exports = router;