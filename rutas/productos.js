import express from 'express';
import {productos} from '../dataExample.js'
const router = express.Router();

router.get('/listar', (req, res) => {
    res.send(productos);
});

export default router;
