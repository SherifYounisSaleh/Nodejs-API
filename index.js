const express =require('express')
const order = require('./router/orders')
const user = require('./router/users')
const product = require('./router/products')
const orderProducts = require('./router/order_products')
const bodyParser= require('body-parser')
const cors = require("cors");
const  isJWTvalid  =require('./middleware/authRoute') 
const jwt =require('jsonwebtoken') ;
const { Secret } =require('jsonwebtoken') ;

require('dotenv').config()
const secret= process.env.SECRET


const app = express() 

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/',isJWTvalid,user)
app.use('/api/',isJWTvalid,order)
app.use('/api/',isJWTvalid,product)
app.use('/api/',isJWTvalid,orderProducts)
app.get('/secure/',(req,res)=>{
    const createAuthToken = jwt.sign({payload: { x: 1, y: '2'}}, secret)
    res.send(createAuthToken)
});
    

app.listen(process.env.SERVER_PORT,()=>{

    console.log(`server is started on port ${ process.env.SERVER_PORT}`)
})
