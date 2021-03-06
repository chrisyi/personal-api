const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');


app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/user', mainCtrl.showuser)
app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl. getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupationsbylatest', mainCtrl.getOccupationsByLatest)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesByType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyByGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName)
app.put('/name', mainCtrl.putName)
app.put('/location', mainCtrl.putLocation)
app.post('/hobbies', mainCtrl.postHobbies)
app.put('/hobbies/:type', mainCtrl.putHobbies)
app.post('/occupations', mainCtrl.postOccupations)
app.post('/family', mainCtrl.postFamily)
app.post('/restaurants', mainCtrl.postRestaurants)
app.get('/skillz', mainCtrl.getSkillz)
app.post('/skillz', mainCtrl.postSkillz)


app.listen(3000, function() {
  console.log('listening at port 3000');
});