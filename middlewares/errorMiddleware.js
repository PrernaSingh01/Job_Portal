//error middleware || Next function

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500);
};
