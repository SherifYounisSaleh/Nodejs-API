const { Request, Response, NextFunction } =require('express') 
const StatusCode = require('http-status-codes')

    
// A Function To Handle Errors Globally
const globalErrorHandler = (err, _, res, next) => {
  const status = err.status || StatusCode.INTERNAL_SERVER_ERROR
  const message = err.message || 'internal server error (500)'
  res.status(status).json({ status: 'ERROR', message })
  next()
}
export default globalErrorHandler
