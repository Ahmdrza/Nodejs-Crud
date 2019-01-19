"use strict";
var config = require('../config/config');
var user = require('../models/user');
const nodemailer = require("nodemailer");

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

//email
exports.send_email = async function(req, res){
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: config.smtp_email, // generated ethereal user
            pass: config.smtp_password // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Ahmad Raza 👻" <foo@example.com>', // sender address
            to: "Ahmdrzalifa@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions)
        res.status(200).json({
            response: 'success',
            message_id: info.messageId
        });

    } catch(e) {
        res.status(200).json({
            response: 'failed',
            message: e.response
        });
    }
}

// Display detail page for a specific user.
exports.user_detail = function(req, res) {
    res.send('User detail: ' + req.params.id);
};