const express = require('express');
const userController = require('./../controllers/user.controller');

const router = express.Router();

router.get('/users', userController.getAll)
router.get('/users/:user', userController.getOne);
router.post('/users', userController.add);

module.exports = router;