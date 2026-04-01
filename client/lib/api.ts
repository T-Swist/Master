import axios from 'axios';
import { ContactFormData, Project, Service } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactAPI = {
  submit: async (data: ContactFormData) => {
    const response = await api.post('/api/contact', data);
    return response.data;
  },
};

export const portfolioAPI = {
  getAll: async (): Promise<Project[]> => {
    const response = await api.get('/api/portfolio/projects');
    return response.data.data;
  },
  getById: async (id: string): Promise<Project> => {
    const response = await api.get(`/api/portfolio/projects/${id}`);
    return response.data.data;
  },
};

export const servicesAPI = {
  getAll: async (): Promise<Service[]> => {
    const response = await api.get('/api/services');
    return response.data.data;
  },
};

export const analyticsAPI = {
  trackPageView: async (page: string) => {
    await api.post('/api/analytics/page-view', { page });
  },
  trackProjectClick: async (projectId: string) => {
    await api.post('/api/analytics/project-click', { projectId });
  },
};
