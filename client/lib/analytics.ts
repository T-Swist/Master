import ReactGA from 'react-ga4';

export const initGA = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const logContactFormSubmit = () => {
  logEvent('Contact', 'Form Submit', 'Contact Form');
};

export const logResumeDownload = () => {
  logEvent('Resume', 'Download', 'Resume PDF');
};

export const logProjectClick = (projectName: string) => {
  logEvent('Portfolio', 'Project Click', projectName);
};

export const logBlogPostView = (postTitle: string) => {
  logEvent('Blog', 'Post View', postTitle);
};
