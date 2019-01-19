var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');

//add user
router.post('/add', user_controller.add_user);

/* GET users listing. */
router.get('/', user_controller.user_list);

/* get user detail */
// router.get('/:id', user_controller.user_detail);

module.exports = router;
