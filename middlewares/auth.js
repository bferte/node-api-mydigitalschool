const jwt = require ('jsonwebtoken')

const withAuth = (req, res, next) => {
    if (req.headers.authorization) {
        // req.headers.authorization = bearer <token>
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            res.status(401).send('Unauthorized: No token provided')
        } else {
            jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
                if(error) {
                    res.status(401).send('Unauthorized: Invalid token')
                } else {
                    console.log(JSON.stringify(decoded))
                    const now = new Date().getTime() / 1000
                    console.log(decoded.exp < now)
                    next()
                }
            })
        }
    } else {
            res.status(401).send('Unauthorized: No token provided')
        
    }
}

module.exports = withAuth