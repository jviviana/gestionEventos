import { Router } from 'express';
import { EventoController } from '../controllers/evento.control';

const router = Router();

router.get('/', EventoController.getAll);
router.post('/', EventoController.create);

export default router;