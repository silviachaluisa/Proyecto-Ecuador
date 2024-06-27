import express from 'express'

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hola mundo');
  });

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app