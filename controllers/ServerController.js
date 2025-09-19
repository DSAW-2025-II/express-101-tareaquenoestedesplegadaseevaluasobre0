//Controlador del servidor 
module.exports = {
    
    //Get que envía un mensaje como respuesta
    get : (request, response) => {
        response.send(`Hello, take into account that this team has ${process.env.ID_TOTAl} members`)
    }
    
}