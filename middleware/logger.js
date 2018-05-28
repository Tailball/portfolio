const insertLogger = (req, res, next) => {
  console.log(` > ${req.method} TO ${req.originalUrl}`);

  next();
}

module.exports = insertLogger;