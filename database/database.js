var Sequelize = require("sequelize")
require('dotenv').config()

const db= new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
      host:process.env.HOST,
      dialect:process.env.DIALECT
    }
  );
  //  const db= new Sequelize('postgres://postgres:Sherif3m@@localhost:5432/FWD')
  
  
    try{
       db.authenticate();
      console.log('done')
      }catch(error){
        console.log(error)
      }

      module.exports={db}