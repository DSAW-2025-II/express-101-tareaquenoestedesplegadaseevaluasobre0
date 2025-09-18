require('dotenv').config();
const express = require("express")

const app = express()
app.use(express.json())

const userRoute = require('./routes/user-info')
app.use("/user-info", userRoute)

app.get('/', (request, response) => {
    response.send("Hola mundo")
})

app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}`)
})