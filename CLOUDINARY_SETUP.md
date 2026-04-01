# Cloudinary Setup Guide

This guide will help you set up Cloudinary for image hosting in your portfolio.

## Step 1: Create a Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your Cloud Name

1. Log in to your Cloudinary dashboard
2. Find your **Cloud Name** in the dashboard (top left)
3. Copy this cloud name

## Step 3: Configure Environment Variables

Add your Cloudinary cloud name to the client environment file:

```bash
cd client
```

Create or update `.env.local`:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

## Step 4: Upload Your Images

### Option A: Upload via Dashboard (Recommended for beginners)

1. Go to Media Library in your Cloudinary dashboard
2. Create a folder structure:
   ```
   portfolio/
   ├── profile-photo
   ├── logo
   ├── projects/
   │   ├── jett-electric
   │   ├── t-swist-fingers
   │   ├── t-swist-menu
   │   ├── thompson
   │   ├── dream-to-live
   │   └── comforts-menu
   └── business/
       ├── workspace-1
       ├── workspace-2
       └── workspace-3
   ```
3. Upload your images to the respective folders
4. Note the Public IDs (they should match the structure above)

### Option B: Upload via API

Use the Cloudinary upload widget or API to programmatically upload images.

## Step 5: Image Naming Convention

Make sure your uploaded images have these Public IDs:

**Profile & Branding:**
- `portfolio/profile-photo` - Your profile picture
- `portfolio/logo` - Your logo

**Projects:**
- `portfolio/projects/jett-electric` - Jett Electric project
- `portfolio/projects/t-swist-fingers` - T-Swist Fingers project
- `portfolio/projects/t-swist-menu` - T-Swist Menu project
- `portfolio/projects/thompson` - Thompson portfolio
- `portfolio/projects/dream-to-live` - Dream To Live project
- `portfolio/projects/comforts-menu` - Comfort's Menu project

**Business Images:**
- `portfolio/business/workspace-1` - Business workspace 1
- `portfolio/business/workspace-2` - Business workspace 2
- `portfolio/business/workspace-3` - Business workspace 3

## Step 6: Image Optimization

Cloudinary automatically optimizes your images with:
- ✅ Auto format (WebP, AVIF when supported)
- ✅ Auto quality
- ✅ Responsive sizing
- ✅ Lazy loading
- ✅ CDN delivery

## Step 7: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000
3. Check if images load correctly
4. Open browser DevTools > Network tab to verify images are coming from Cloudinary CDN

## Troubleshooting

### Images not loading?
- Verify your cloud name is correct in `.env.local`
- Check that Public IDs match exactly (case-sensitive)
- Ensure images are uploaded to Cloudinary
- Restart your dev server after changing `.env.local`

### Images loading slowly?
- Cloudinary CDN should be fast globally
- Check your internet connection
- Verify auto-optimization is enabled in Cloudinary settings

### Need different image sizes?
The CloudinaryImage component automatically handles responsive images. You can customize transformations in `lib/cloudinary.ts`.

## Benefits of Using Cloudinary

1. **Performance**: Global CDN ensures fast loading worldwide
2. **Optimization**: Automatic format and quality optimization
3. **Responsive**: Serves appropriate image sizes for different devices
4. **Transformations**: Easy image manipulation (crop, resize, effects)
5. **Free Tier**: Generous free tier for personal portfolios
6. **Reliability**: 99.9% uptime SLA

## Next Steps

After setup, your images will automatically:
- Load faster via CDN
- Be optimized for each device
- Support modern formats (WebP, AVIF)
- Have lazy loading enabled
- Be cached for better performance

For more advanced features, check the [Cloudinary Documentation](https://cloudinary.com/documentation).
