const express = require('express')
const {orders} = require('../seqluelize-models/index')
const Sequelize = require("sequelize")
 
const userRouter = express.Router()
userRouter
.route('/order')
.get((req,res) => {
 
    orders.findAll().then(user => {
      res.json(user)
   
    
  })
})

.post((req, res) => {
  let order = req.body
  orders.create(order).then(order => {
    res.json(order)
  })
})
userRouter.route('/order/:id')
.delete((req, res) => {
  let id = req.params.id
  orders.destroy({
    where: { id: `${id}` }
  }).then(order => {
    res.end(`order ${id} was deleted`)
  })
})
.get((req, res) => {
  let id = req.params.id
  orders.findOne({
    where: { id: `${id}` }
  }).then(order => {
    res.status(200).json(order)

  })
})
.put((req, res) => {
  let id = req.params.id
  let body = req.body
  orders.update({
  id: `${body.id}`, 
  user_id: `${body.user_id}`,
  status: `${body.status}`,
  ordered_at: `${body.ordered_at}`   
  }, 
  {
    where: { id: `${id}` }
  }).then(order => {
    res.status(200).end(`order ${id} is done`)

  })
})

module.exports =  userRouter