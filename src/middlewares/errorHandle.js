/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    status: statusCode,
    error: err.name,
    message: err.message.split(','),
    stack: process.env.NODE_ENV === 'prod' ? {} : err.stack,
  });
}

module.exports = {
  errorHandler,
};
