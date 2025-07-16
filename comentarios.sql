
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS ComentariosDB;

-- Usar la base de datos
USE ComentariosDB;

-- Crear la tabla
CREATE TABLE IF NOT EXISTS Comentarios (
    idComentario INT AUTO_INCREMENT PRIMARY KEY,
    mail VARCHAR(45),
    mensaje VARCHAR(150)
);
