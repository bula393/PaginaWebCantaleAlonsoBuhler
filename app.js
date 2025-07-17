const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Cambiar si tu HTML está en otra carpeta

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'alumno',
  password: 'alumnoipm',
  database: 'ComentariosDB'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos.');
});

// Ruta para manejar el formulario
app.post('/comentario', (req, res) => {
  const email = req.body.email;
  const mensaje = req.body.mensaje;

  db.query(`INSERT INTO Comentarios (mail, mensaje) VALUES ("${email}","${mensaje}")`, (err, result) => {
    if (err) throw err;
    console.log('Comentario guardado:', result.insertId);
    res.send('Comentario recibido');
  });
  db.end; 
  console.log("funca");
});

// Iniciar servidor
app.listen(port, hostname, () => {
  console.log(`Servidor funcionando en http://${hostname}:${port}/`);
});
