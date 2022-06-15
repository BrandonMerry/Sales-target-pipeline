const express = require('express');

// uses express method call instead of creating a new app  -- lets use router in different file
const route = express.Router()


// calls the services foulder for render instead of call back functions
const services = require('../services/render');

// call the controller file for connection to create api
const controller = require('../controller/controller');


// respond the index.ejs file  "home route"
// uses render.js from services folder instead of          route.get('/', (req, res) => {res.render('index');})
route.get('/', services.homeRoutes);

// route for add new user from btn to form uses Get method
route.get('/add-user', services.add_user)

// route from update btn to user form uses Get method
route.get('/update-user', services.update_user)

// API paramaters
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


// lets you export this to be used in server.js
module.exports = route