const express = require("express")

require("dotenv").config();

const app = express()
app.use(express.json())

const userRoute = require('./routes/user-info')
app.use("/user-info", userRoute)

const controller = require('./controllers/ServerController')
app.get('/', controller.get)

app.listen(process.env.PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${process.env.PORT}`)
})