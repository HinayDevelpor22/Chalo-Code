const express = require('express');
const router = express.Router();

router.get('/courses', async (req, res) => {
 res.sendFile("/public/courses.html")
});

module.exports = router;
