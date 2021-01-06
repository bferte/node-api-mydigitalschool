// Initialisation de l'environnement
require('dotenv').config()

// Imports
const express = require('express')
const bodyParser = require('body-parser')

//connecteur a la base de données mongoDB
const mongoose = require('mongoose')

const Logger = require('./tools/logger')

const app = express()

// Réglage du port d'écoute
const port = process.env.PORT || 3000
var router = express.Router()

//initialisation de la conection a la base de données
const mongoURL = process.env.MONGO_URL + '?retryWrites=true&w=majority'


const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(mongoURL, dbOptions, error => {
  if(error) {
    throw error
  }
})

//passage en mode debug
mongoose.set('debug', true)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erreur lors de la connexion'))
db.once('open', () => {
  console.info('connexion à a la base : OK')
})


// Mise en place du bodyParser afin d'obtenir un objet req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Mise en place du logger
app.use(Logger)

app.use(router)

/**
 * Routes
 */
app.use('/', require('./routes'))
app.use('/notes', require('./routes/notes'))
app.use('/users', require('./routes/users'))
app.use('/emails', require('./routes/emails'))

// Start server listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
