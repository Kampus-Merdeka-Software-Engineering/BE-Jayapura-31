const konselingController = require('../controllers/konseling.controller');
const router = require('express').Router();

router.post('/add', konselingController.create);
router.get('/', konselingController.findAll);

module.exports = router;
