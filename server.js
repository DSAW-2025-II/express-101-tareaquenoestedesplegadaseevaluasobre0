//Creación del servidor
const express = require("express")
const app = express()

// Importación de las variables de entorno
require("dotenv").config();


app.use(express.json())

//Route desde user-info para manejar su información
const userRoute = require('./routes/user-info')
app.use("/user-info", userRoute)

//Get de la aplicación (literalmente la página de bienvenida)
const controller = require('./controllers/ServerController')
app.get('/', controller.get)

//Inicialización del servidor
app.listen(process.env.PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${process.env.PORT}`)
})