import { Router } from 'express';
import { EstablishmentsController } from '../controllers/EstablishmentsController';

const router = Router();
const establishmentsController = new EstablishmentsController();

router.post('/establishment', establishmentsController.create);

export default router;