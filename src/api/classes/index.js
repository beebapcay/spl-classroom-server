const express = require('express');
const router = express.Router();

const controller = require('./classes.controller');

router.get('/', controller.getClasses);

router.post('/', controller.createClass);

module.exports = router;
