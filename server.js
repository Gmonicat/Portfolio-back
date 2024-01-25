const express = require('express');
const passport = require('passport')
const cors = require('cors');
const app = express();
const clientsRouter = require('./routes/routes.js');

require('dotenv').config();
require('./config/database.js');

const PORT = process.env.PORT || 5000
app.set("port",PORT);

app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use( '/api', clientsRouter);


app.listen(PORT,()=>{
    console.log("Servidor corriendo en puerto:" +app.get('port'))
})