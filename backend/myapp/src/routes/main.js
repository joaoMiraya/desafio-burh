const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');

router.get('/list', controller.list);
router.get('/list/:bimestre', controller.findByBimestre);
router.post('/create', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);


module.exports = router;
