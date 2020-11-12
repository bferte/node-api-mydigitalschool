const loggerMiddleware = (req, res, next) => {
    if(req) {
       console.info(
           `Requete ${req.method} reçue de ${req.ip} à destination de ${req.url}`
           ) 
    }
    // if (res) {
    //     console.info(
    //         `Requete ${res}`
    //     )
    // }
    next()
    
}

module.exports = Logger = loggerMiddleware

