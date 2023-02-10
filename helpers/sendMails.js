const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });


module.exports = {
    confirmRegister : async (data) => {
        const {name, email, token} = data

        await transport.sendMail({
        from : "Test Project Manager <leandroriosga@gmail.com>",
        to : email,
        subject : "Confirma tu cuenta",
        text: "Confirma tu cuenta en Project Manager",
        html : `
        <p>Hola ${name}, clickea el siguiente enlace</p>
        <a href="${process.env.URL_FRONTEND}/confirm/${token}">Confirma tu cuenta</a>
        `,

    })

    },
    forgotPassword : async (data) => {
      const {name, email, token} = data
      try {

      const infoMail = await transport.sendMail({
      from : "Test Project Manager <leandroriosga@gmail.com>",
      to : email,
      subject : "Restablece tu contraseña",
      text: "Restablece tu contraseña en Project Manager",
      html : `
      <p>Hola ${name}, clickea el siguiente enlace para </p>
      <a href="${process.env.URL_FRONTEND}/recover-password/${token}">Restablecer tu contraseña</a>
      `,

  })
  
  console.log(infoMail);
          
}catch(error){
  console.log(error);
}
}
}
