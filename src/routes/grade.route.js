const express = require('express');
const gradeController = require('./../controllers/grade.controller');

const router = express.Router();

router.get('/grades', gradeController.getAll)
router.get('/grades/:id', gradeController.getOne);
router.post('/grades', gradeController.add);

module.exports = router;