const express = require('express')
const {products} = require('../seqluelize-models/index')
const Sequelize = require("sequelize")

const userRouter = express.Router()
userRouter
.route('/product')
.get((req,res) => {
 
    products.findAll().then(user => {
      res.json(user)
    
  })
})
.post((req, res) => {
  let user = req.body
  products.create(user).then(product => {
    res.json(product)


  })
})
userRouter.route('/product/:id')
.delete((req, res) => {
  let id = req.params.id
  products.destroy({
    where: { id: `${id}` }
  }).then(user => {
    res.end(`user ${id} was deleted`)
  })
})
.get((req, res) => {
  let id = req.params.id
  products.findOne({
    where: { id: `${id}` }
  }).then(product => {
    res.status(200).json(product)

  })
})
.put((req, res) => {
  let id = req.params.id
  let body = req.body
  products.update({
  id: `${body.id}`, 
  title: `${body.title}`,
  description: `${body.description}`,
  quantity: `${body.quantity}` , 
  price: `${body.price}` ,
  added_at: `${body.added_at}`   
  }, {
    where: { id: `${id}` }
  }).then(product => {
    res.status(200).end(`update ${id} is done`)

  })
})


module.exports =  userRouter