import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import routerPrueba from './rutas/prueba.js';
import routerProductos from './rutas/productos.js';

dotenv.config();
const app = express();
app.use(express.json()); // Para manejar JSON en las peticiones

// Calcular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta "public"
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("API FakeStore funcionando");
});

app.use('/productos', routerProductos);
app.use('/prueba', routerPrueba);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
