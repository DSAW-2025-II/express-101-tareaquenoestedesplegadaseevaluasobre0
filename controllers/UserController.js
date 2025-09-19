//Controlador del user-info
module.exports = {

    //Get que envía los datos del usuario por medio de su id
    get : (request, response) => {
        
        //Se recibe el ID y se asegura que sea un entero
        const id = parseInt(request.params.id);

        //Condicional para saber si el ID matchea con los valores definidos en .env
        if (id !== 1 && id !==2) {

            //Manejo del error por parte del usuario en su solicitud
            if (id <=0){
                return response.status(400).json( {error: "Please enter a valid ID"} )
            } else { //El servidor no encuentra el recurso solicitado
                return response.status(404).json( {error: "Resource not found"} )
            }
            
        }

        //Parseo del response como un JSON que contiene los datos el usuario
        response.json(

            {
                "name": process.env[`NAME_${id}`],
                "lastName": process.env[`LASTNAME_${id}`],
                "email": process.env[`EMAIL_${id}`],
                "id": process.env[`ID_${id}`]
            }

        )
    }

}