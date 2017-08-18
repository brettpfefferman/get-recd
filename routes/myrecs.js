var express = require('express');
var router = express.Router();
var myrecsController = require('../controllers/myrecs');

router.get('/', myrecsController.index);
router.get('/new', myrecsController.new);
router.post('/add', myrecsController.search);
router.post('/update', myrecsController.update);
router.get('/about', myrecsController.about);
router.post('/addmore/:id', myrecsController.addmore);
router.delete('/:id', myrecsController.delete);
router.post('/:id', myrecsController.add);
module.exports = router;
