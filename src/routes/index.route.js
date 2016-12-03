const express = require('express');
const indexGetController = require('./../controllers/index.controller.js');

const router = express.Router();

router.get('/', indexGetController);

module.exports = router;