import { Router } from 'express';
import { submitContactForm } from '../controllers/contactController';
import { validateContactForm, handleValidationErrors } from '../middleware/validator';
import { contactRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post(
  '/',
  contactRateLimiter,
  validateContactForm,
  handleValidationErrors,
  submitContactForm
);

export default router;
