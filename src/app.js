const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const { errorHandler } = require('./middlewares/errorHandle');

const app = express();

app.use(morgan('short'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '👋',
  });
});

// API router PATH
const helloworld = require('./router/helloworld');

app.use('/api/v1/helloworld', helloworld);

// 404 Notfound URL
app.use((req, res, next) => {
  res.status(404);
  const error = new Error(`- Not Found - ${req.originalUrl}`);
  next(error);
});

app.use(errorHandler);

module.exports = app;
