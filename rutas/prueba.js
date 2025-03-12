import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ruta de prueba funcionando');
});

export default router;
