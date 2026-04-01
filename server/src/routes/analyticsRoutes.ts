import { Router } from 'express';
import { trackPageView, trackProjectClick } from '../controllers/analyticsController';

const router = Router();

router.post('/page-view', trackPageView);
router.post('/project-click', trackProjectClick);

export default router;
