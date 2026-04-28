const User = require('../models/userModel');

exports.getUsers = (req, res) => {
    User.getAll((err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createUser = (req, res) => {
  console.log("Form Data:", req.body);

  res.json({
    success: true,
    message: "Message sent successfully ✅"
  });
};