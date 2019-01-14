var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controller.user_list);

/* get user detail */
router.get('/:id', user_controller.user_detail);

module.exports = router;
