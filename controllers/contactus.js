const nodemail = require('nodemailer')
const mailgen = require('mailgen')

async function contactus(req, res) {

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
    console.log(`The mail is sent to ${email}`);
  })
}

module.exports = contactus