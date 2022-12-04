const { Request, Response, NextFunction } =require('express') 
const jwt =require('jsonwebtoken') 
const { StatusCodes } =require('http-status-codes') 
require('dotenv').config()
const secret= process.env.SECRET


const handleError = (next) => {
  const error = new Error('Unauthorized Access, Try To Login Again!')
  error.status = 'UNAUTHORIZED'
  next(error)
}

const isJWTvalid = (req, _res, next) => {
  const authHeader = req.get('Authorization')
  if (authHeader) {
    // const bearer = authHeader.split(' ')[0].toLowerCase()
    const token = authHeader.split(' ')[0]
    // if (token && bearer === 'bearer') {
      const JWT_SECRET  = process.env
      const decoded = jwt.verify(token, secret)
      if (decoded) {
        next()
    //   } else {
    //     handleError(next)
    //   }
    } else {
      handleError(next)
    }
  } else {
    handleError(next)
  }
}

module.exports= isJWTvalid
