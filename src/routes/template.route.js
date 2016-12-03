const express = require('express');
const templateController = require('./../controllers/template.controller');

const router = express.Router();

router.get('/templates', templateController.getAll)
router.get('/templates/:template', templateController.getOne);
router.post('/templates', templateController.add);

module.exports = router;