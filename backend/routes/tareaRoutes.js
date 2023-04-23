import express from 'express';
import {agregarTarea, obtenerTarea, ActualizarTarea, EliminarTarea, cambiarEstado} from '../controllers/tareaController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/', checkAuth, agregarTarea);

router.get('/:id', checkAuth, obtenerTarea);
router.put('/:id', checkAuth, ActualizarTarea);
router.delete('/:id', checkAuth, EliminarTarea);

router.post('/estado/:id', checkAuth, cambiarEstado);


export default router