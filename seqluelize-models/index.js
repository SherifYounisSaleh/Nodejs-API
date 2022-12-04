var DataTypes = require("sequelize").DataTypes;
var Sequelize = require("sequelize")
const {db}=require('../database/database')
var _order_products = require("./order_products");
var _orders = require("./orders");
var _products = require("./products");
var _users = require("./users");

  var order_products = _order_products(db, DataTypes);
  var orders = _orders(db, DataTypes);
  var products = _products(db, DataTypes);
  var users = _users(db, DataTypes);

  order_products.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_products, { as: "order_products", foreignKey: "order_id"});
  order_products.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_products, { as: "order_products", foreignKey: "product_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  module.exports={
    order_products,
    orders,
    products,
    users,
  };


