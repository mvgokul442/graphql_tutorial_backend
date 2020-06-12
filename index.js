
const express = require("express")
const expressGraphql = require("express-graphql")
const Schema = require("./Schema")
const mongoose = require ("mongoose")
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();
const app = express()

mongoose.connect((process.env.DB_CONNECT),
    { useNewUrlParser: true }
    )
mongoose.connection.once('open',()=>console.log("db connected"))    

app.use(cors())
app.use('/graphql',expressGraphql({
schema:Schema,
graphiql:true
})); 

app.listen(4000,()=>console.log("server up and running"))