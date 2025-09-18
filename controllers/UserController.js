module.exports = {

    get : (request, response) => {
        
        const id = parseInt(request.params.id);

        if (id !== 1 && id !==2) {

            if (id <=0){
                return response.status(400).json( {error: "Please enter a valid ID"} )
            } else {
                return response.status(404).json( {error: "Resource not found"} )
            }
            
        }

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