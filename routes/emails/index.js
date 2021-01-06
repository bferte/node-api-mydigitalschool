const router = require("express").Router();
const SendMail = require ('../../tools/mailer')



router.route("/send").post((req, res) => {

    const dest = req.body.dest ? req.body.dest : 'cacafdsfsdfsd454@gmail.com'
    // const dest = req.body.dest || 'cacafdsfsdfsd454@gmail.com'
    const message = req.body.message

    if(!dest) {
       return res.status(500).send('ERREUR : Destinataire Manquant' )
    } else if (!message) {
       return res.status(500).send('ERREUR : Message Manquant' )
    } else {
        SendMail(dest, message)
    }

    console.log("je suis dans /send");
    

});

module.exports = router;
