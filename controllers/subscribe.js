const nodemail = require('nodemailer')
const mailgen = require('mailgen')

async function subscribe(req, res) {

   try{
       const email = req.body.email

       const transporter = nodemail.createTransport({
          service: 'gmail',
          auth: {
            user: 'connect.urbanspace@gmail.com',
            pass: `cghfbvmttjungoyl`
          }
       })
  
       let mailGenerator = new mailgen({
          theme: 'default',
          product: {
            name: 'Urban Space',
            link: 'https://urbanspace.shop/',
            logo: 'https://lh3.googleusercontent.com/a-/ALV-UjXG9gSS6u2exnKVNB6JgFhh5iJbg8QrnoHiUhJeKdQ_vg=w120-h120-p-rp-mo-br100'
          }
       })
  
       let Response = {
          body: {
            name: `${email}`,
            intro: 'Thank you for Subscribing our website, keep updated with us through email',
          },
          outro: 'Best Wishes'
       }
  
       let mail = mailGenerator.generate(Response)
  
       const mailOptions = {
          from: 'Urban Space <connect.urbanspace@gmail.com>',
          to: `${email}`,
          subject: 'Subscribe Urban Space',
          html: mail
       }
  
       const sentmail = transporter.sendMail(mailOptions, () => {
          res.status(200).json( { response :"Subscribed"} )
       })   
   }
   catch(err){
        res.status(404).json( { response :"Could not subscribed"} )
   }
}

module.exports = subscribe