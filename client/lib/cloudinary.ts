export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
};

export const getCloudinaryImageUrl = (publicId: string, transformations?: string) => {
  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;
  
  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }
  
  return `${baseUrl}/${publicId}`;
};

export const cloudinaryImages = {
  profile: 'portfolio/profile-photo',
  logo: 'portfolio/logo',
  projects: {
    jettElectric: 'portfolio/projects/jett-electric',
    tSwistFingers: 'portfolio/projects/t-swist-fingers',
    tSwistMenu: 'portfolio/projects/t-swist-menu',
    thompson: 'portfolio/projects/thompson',
    dreamToLive: 'portfolio/projects/dream-to-live',
    comfortsMenu: 'portfolio/projects/comforts-menu',
  },
  business: {
    workspace1: 'portfolio/business/workspace-1',
    workspace2: 'portfolio/business/workspace-2',
    workspace3: 'portfolio/business/workspace-3',
  },
};
