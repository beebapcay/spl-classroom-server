const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./src/routes/index');
const classApiRouter = require('./src/api/classes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// DB connection
require('./src/database/connection');

app.use('/', indexRouter);
app.use('/api/v1/classes', classApiRouter);

module.exports = app;
