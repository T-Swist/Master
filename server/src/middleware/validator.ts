import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateContactForm = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().trim(),
  body('company').optional().trim(),
  body('projectType').notEmpty().withMessage('Project type is required'),
  body('budget').notEmpty().withMessage('Budget range is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};
