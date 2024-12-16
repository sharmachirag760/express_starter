const express = require('express');
const server = require('./config/ServerConfig')
const connectDB = require('./config/dbConfig')
const app = express();
app.listen(server.PORT, async ()=>{
    await connectDB();
    console.log(`Port started at ${server.PORT} !!`)
})