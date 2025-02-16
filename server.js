const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar el formulario
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  // Configura el transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tu-email@gmail.com", // Cambia esto por tu correo
      pass: "tu-contraseña",       // Cambia esto por tu contraseña
    },
  });

  // Configura el contenido del correo
  const mailOptions = {
    from: email,
    to: "destinatario@example.com", // Cambia esto por el correo destinatario
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  // Envío del correo
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Mensaje enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    res.status(500).send("Error al enviar el mensaje.");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
