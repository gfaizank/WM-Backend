const nodemail = require('nodemailer')
const mailgen = require('mailgen')

async function contactus(req, res) {

   try{
       const { firstName, lastName, email, phone, message } = req.body


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
           name: `I am ${firstName} ${lastName}`,
           intro: message,
           table: {
             data: [
               {
                 Email: email,
                 Phone: phone
            }    
             ]
           }
         },
         outro: 'Best Wishes'
       }
  
       let mail = mailGenerator.generate(Response)
  
       const mailOptions = {
         from: 'Urban Space Visitor <connect.urbanspace@gmail.com>',
         to: email,
         subject: 'Visitor Contacted',
         html: mail
       }
  
       const sentmail = transporter.sendMail(mailOptions, () => {
          res.status(200).json( { response :"We will get back to you shortly"} )
       })
   }
   catch(err){
       res.status(404).json( { response :"Contact Details sending failed"} )
   }
}

module.exports = contactus