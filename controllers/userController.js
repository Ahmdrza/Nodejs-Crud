var user = require('../models/user');

//add user
exports.add_user = function(req, res) {
    let userData= req.body;
    console.log(userData.name);
};

//get user listing
exports.user_list = async function(req, res) {
    try {
        let result = await user.count();
        res.status(200).json({
            total_users: result
        });
    } catch(e) {
        res.status(500).json({
            'response' : e
        });
    }
    
};

// Display detail page for a specific user.
exports.user_detail = function(req, res) {
    res.send('User detail: ' + req.params.id);
};