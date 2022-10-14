const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing"); show in next middleware page, if we dont set next()function in the end. no where to go
  next();
};
exports.logger = logger;
//module.exports=logger
