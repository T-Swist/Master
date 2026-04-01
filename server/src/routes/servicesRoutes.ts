import { Router } from 'express';
import { getAllServices } from '../controllers/servicesController';

const router = Router();

router.get('/', getAllServices);

export default router;
