const express = require('express')
const {users} = require('../seqluelize-models/index')
const Sequelize = require("sequelize")

 
const userRouter = express.Router()
userRouter
.route('/user')
.get((req,res) => {
  
  users.findAll().then(user => {
      res.json(user)
    
  })
})
.post((req, res) => {
  let user = req.body
  users.create(user).then(user => {
    res.json(user)


  })
})
userRouter.route('/user/:id')
.delete((req, res) => {
  let id = req.params.id
  users.destroy({
    where: { id: `${id}` }
  }).then(user => {
    res.end(`user ${id} was deleted`)


  })
})
.get((req, res) => {
  let id = req.params.id
  users.findOne({
    where: { id: `${id}` }
  }).then(user => {
    res.status(200).json(user)

  })
})
.put((req, res) => {
  let id = req.params.id
  let body = req.body
  users.update({
  id: `${body.id}`, 
  email: `${body.email}`,
  first_name: `${body.first_name}`,
  last_name: `${body.last_name}` , 
  password: `${body.password}` ,  
  }, {
    where: { id: `${id}` }
  }).then(user => {
    res.status(200).end(`update ${id} is done`)

  })
})


module.exports =  userRouter