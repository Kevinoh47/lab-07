'use strict';

// 3rd Party
const express = require('express');
const superagent = require('superagent');

const API = 'http://localhost:3000';

const router = express.Router();

// Dynamic Routes
router.get('/list', listPage);
router.post('/list', addItem);
router.delete('/list', deleteItem);
router.put('/list', putItem);
router.patch('/list', patchItem);


// Route Runners
function listPage(request, response) {
  superagent.get( `${API}/api/v1/categories`)
    .then(data => {
      response.render('site', {page: './pages/list', title:'Listings', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function addItem( request, response )  {
  superagent.post( `${API}/api/v1/categories`)
    .then( () => {
      response.redirect('/list'); 
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function deleteItem( request, response )  {
  superagent.delete( `${API}/api/v1/categories/${request.body._id}`)
    .then( () => {
      response.redirect('/list'); 
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function putItem( request, response )  {
  superagent.put( `${API}/api/v1/categories/${request.body._id}`)
    .then( () => {
      response.redirect('/list'); 
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function patchItem( request, response )  {
  superagent.patch( `${API}/api/v1/categories/${request.body._id}`)
    .then( () => {
      response.redirect('/list'); 
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

module.exports = router;