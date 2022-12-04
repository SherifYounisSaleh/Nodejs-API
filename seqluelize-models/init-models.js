var DataTypes = require("sequelize").DataTypes;
var Sequelize = require("sequelize")
var _order_products = require("./order_products");
var _orders = require("./orders");
var _products = require("./products");
var _users = require("./users");
// const sequelize= new Sequelize(
//   'FWD',
//   'postgres',
//   'Sherif3m@',
//   {
//     host:'localhost',
//     dialect:'postgres'
//   }
// );
// const db= new Sequelize('postgres://postgres:Sherif3m@localhost:5432/FWD')

 async function initModels(db) {
  try{
    await db.authenticate();
    console.log('done')
    }catch(error){
      console.log(error)
    }
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

  return{
    order_products,
    orders,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
