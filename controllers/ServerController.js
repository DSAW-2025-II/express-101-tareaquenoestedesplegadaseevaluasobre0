module.exports = {

    get : (request, response) => {
        response.send(`Welcome, please take note that this team has ${process.env.ID_TOTAl} members`)
    }
}