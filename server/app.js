const express = require('express');
const app = express();
const cors = require('cors')
const mainRouter = require('./routes/main.js');
const userRouter = require('./routes/user.js');
const db = require("./database/database")

app.listen(3080, () => {
    console.log("Servidor levantado con éxito en el puerto 3080")
})

db();

app.use(cors())
app.use(express.urlencoded({extendes: false}));
app.use(express.json());
app.use('/', mainRouter);
app.use('/user', userRouter);

