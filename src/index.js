const express = require('express');
const server = require('./config/ServerConfig')
const app = express();
app.listen(server.PORT,()=>{
    console.log(`Port started at ${server.PORT} !!`)
})const dotenv = require('dotenv');
dotenv.config();