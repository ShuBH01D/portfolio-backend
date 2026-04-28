const User = require('../models/userModel');

exports.getUsers = (req, res) => {
    User.getAll((err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createUser = (req, res) => {
    console.log("Incoming data:", req.body);

    return res.status(200).json({
        success: true,
        message: "API working perfectly ✅"
    });
};