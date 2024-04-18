const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});


router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/contactus', (req, res, next) => {
  res.redirect('/success');
});

router.get('/success', (req, res, next) => {
  res.send('<h1>successful</h1>');
});


module.exports = router;
