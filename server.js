const express = require('express');
const path = require('path');
const app = express();

// Carpeta estática
app.use(express.static(path.join(__dirname, 'Public')));

// Ruta principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

// Puerto dinámico (Firebase asigna uno automáticamente)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
