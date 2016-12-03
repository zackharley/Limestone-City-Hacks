const express = require('express');
const indexController = require('./../controllers/index.controller.js');

const router = express.Router();

router.get('/', indexController);

module.exports = router;