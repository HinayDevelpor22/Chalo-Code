const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, message, captcha,phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Error Something is missing' });
  }

  try {
const user = new User({ name, email, message, captcha, phone });
    await user.save();
    res.status(201).json({ message: 'Form submitted successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', error: err });
  }
});

module.exports = router;
