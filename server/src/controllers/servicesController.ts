import { Request, Response } from 'express';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building responsive, conversion-focused websites using modern technologies and best practices.',
    icon: 'code',
  },
  {
    id: '2',
    title: 'Web Design',
    description: 'Crafting beautiful, user-friendly designs that bring your ideas to reality.',
    icon: 'palette',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Creating unique, intuitive user experiences in Figma with attention to detail.',
    icon: 'layout',
  },
];

export const getAllServices = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: services,
  });
};
