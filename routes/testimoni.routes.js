const testimoniController = require('../controllers/testimoni.controller');
const router = require('express').Router();

router.post('/add', testimoniController.create);
router.get('/', testimoniController.findAll);

module.exports = router;
