module.exports = function(app){
  var controllers = require('./controllers/index');
var tracker = require('./controllers/tracker');

app.get('/', controllers.index);
app.get('/tracker/new', controllers.newtracker);
app.get('/resource/new', controllers.newresource);



//Tracker
app.get('/api/tracker/locations', tracker.locations);
app.get('/api/tracker/:id/location', tracker.locationOf);
app.get('/api/tracker/locations/initial', tracker.initialLocations);
app.get('/api/tracker/', tracker.index);
app.post('/api/tracker/create', tracker.create);
app.get('/api/tracker/:id', tracker.get);
app.post('/api/tracker/:id/update', tracker.update);
app.get('/api/tracker/:id/delete', tracker.delete);

//TrackerLocation
app.get('/api/tracker/location/data', tracker.listLocationData);
app.post('/api/tracker/location/data', tracker.addLocationData);
}
