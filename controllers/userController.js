var user = require('../models/user');

exports.user_list = function(req, res) {
    let result = user.count();
    res.status(200).json({
        total_users: result
    });
};

// Display detail page for a specific book.
exports.user_detail = function(req, res) {
    res.send('User detail: ' + req.params.id);
};