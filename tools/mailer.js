const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'SendinBlue',
    auth: {
        user: 'briac.ferte@gmail.com',
        pass: 'yM1z2kRsvPYTmcdE'
    }
})



const sendMail = async (dest, message) => {
    let info = await transporter.sendMail({
        from: '"BF  👻" <foo@example.com>', // sender address
        to: dest , // list of receivers
        subject: "Hello ✔", // Subject line
        text: message, // plain text body
      });

      console.log("Message sent: %s", JSON.stringify(info));
    
} 

module.exports = SendMail = sendMail