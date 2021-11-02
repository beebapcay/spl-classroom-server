const express = require('express');
const router = express.Router();

const controller = require('./classes.controller');

router.get('/', controller.getClasses);

module.exports = router;
