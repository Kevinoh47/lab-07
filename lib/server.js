'use strict';

// Third party libraries
const express = require('express');
const methodOverride = require('method-override');

// Esoteric libraries
const siteRoutes = require('../routes/site-routes.js') ;
const categoryRoutes = require('../routes/category-routes.js') ;


const app = express();

// Set the view engine for templating
app.set('view engine', 'ejs');

// Middleware
// turns form submission into an object
app.use(express.urlencoded({extended:true}));

// To override HTTP GET, POST for REST methods GET, POST, PUT, PATCH, DELETE
app.use( methodOverride( (request,response) => {
  if( request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));

// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.use(siteRoutes);
app.use(categoryRoutes);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

