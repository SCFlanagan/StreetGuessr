var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    locationRoutes = require('./routes/locations');

// Middleware
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use('/api/locations', locationRoutes);

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.listen(port, () => {
    console.log('App is listening on port ' + port);
});

module.exports = app;