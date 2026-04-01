export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web-dev' | 'design' | 'ui-ux';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
