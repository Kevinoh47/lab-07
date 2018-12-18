'use strict';

// 3rd Party
const express = require('express');

const router = express.Router();

// Dynamic Routes
router.get('/', homePage);


// Route Runners
function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

module.exports = router;