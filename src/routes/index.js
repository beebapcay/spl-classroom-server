const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Simple Classroom Server Running');
});

module.exports = router;
