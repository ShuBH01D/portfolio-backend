const User = require('../models/userModel');

exports.getUsers = (req, res) => {
    User.getAll((err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createUser = (req, res) => {
    User.create(req.body, (err, results) => {
        if(err) return res.status(500).send(err);
        res.json({ message: 'User created successfully!' });
    });
};
