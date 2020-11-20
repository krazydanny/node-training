var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController')

router.get( '/:id', controller.getById );
router.post( '/', controller.create );

module.exports = router;