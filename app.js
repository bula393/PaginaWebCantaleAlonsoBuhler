const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Para servir tu HTML

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // tu contraseña
  database: 'nombre_de_tu_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos.');
});

// Ruta para manejar el formulario
app.post('/comentario', (req, res) => {
  const { email, mensaje } = req.body;

  const sql = 'INSERT INTO comentarios (mail, mensaje) VALUES (?, ?)';
  db.query(sql, [email, mensaje], (err, result) => {
    if (err) throw err;
    console.log('Comentario guardado:', result.insertId);
    res.send('Comentario recibido');
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
