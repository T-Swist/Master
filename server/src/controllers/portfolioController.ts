import { Request, Response } from 'express';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Jett Electric',
    description: 'Professional business website for electrical services company',
    image: '/images/project-1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web-dev',
  },
  {
    id: '2',
    title: 'T-Swist Fingers',
    description: 'Creative portfolio website showcasing digital art',
    image: '/images/project-2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'design',
  },
  {
    id: '3',
    title: 'T-Swist Menu',
    description: 'Restaurant menu website with modern design',
    image: '/images/Project04.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web-dev',
  },
  {
    id: '4',
    title: 'Thompson Portfolio',
    description: 'Personal portfolio website',
    image: '/images/Screenshot (11).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web-dev',
  },
  {
    id: '5',
    title: 'Dream To Live',
    description: 'Inspirational website project',
    image: '/images/p.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'design',
  },
  {
    id: '6',
    title: "Comfort's Menu",
    description: 'Modern restaurant menu application',
    image: '/images/Screenshot (26).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web-dev',
  },
];

export const getAllProjects = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: projects,
  });
};

export const getProjectById = (req: Request, res: Response) => {
  const { id } = req.params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }

  res.status(200).json({
    success: true,
    data: project,
  });
};
