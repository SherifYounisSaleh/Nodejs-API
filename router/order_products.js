const express = require('express')
const { order_products } = require('../seqluelize-models/index')
const Sequelize = require("sequelize")

const userRouter = express.Router()
userRouter
  .route('/orderProducts')
  .get((req, res) => {
    
    order_products.findAll({order: [ ['id', 'ASC']]}).then(user => {
      res.json(user)
    
    })
  })
  .post((req, res) => {
    let orderProd = req.body
    order_products.create(orderProd).then(orderProd => {
      res.json(orderProd)


    })
  })
userRouter.route('/orderProducts/:id')
  .delete((req, res) => {
    let id = req.params.id
    order_products.destroy({
      where: { id: `${id}` }
    }).then(orderProd => {
      res.end(`order_product ${id} was deleted`)


    })
  })
  .get((req, res) => {
    let id = req.params.id
    order_products.findOne({
      where: { id: `${id}` }
    }).then(orderProd => {
      res.status(200).json(orderProd)

    })
  })
  .put((req, res) => {
    let id = req.params.id
    let body = req.body
    order_products.update({
    id: `${body.id}`, 
    order_id: `${body.order_id}`,
    product_id: `${body.product_id}`,
    quantity: `${body.quantity}`   
    }, {
      where: { id: `${id}` }
    }).then(orderProd => {
      res.status(200).end(`update ${id} is done`)

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
  

module.exports = userRouter

