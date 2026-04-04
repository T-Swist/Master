# Vercel Deployment Guide

## 🚨 CRITICAL: Your Site is Getting 404 Because of Monorepo Structure

Your project has both `client/` and `server/` directories, but Vercel doesn't know to deploy from the `client/` folder.

---

## ✅ STEP-BY-STEP FIX

### Step 1: Configure Root Directory in Vercel

**Option A: Via Vercel Dashboard (Easiest)**
1. Go to https://vercel.com/dashboard
2. Select your project: `thompsondaiminah`
3. Go to **Settings** → **General**
4. Scroll to **"Root Directory"**
5. Click **Edit**
6. Enter: `client`
7. Click **Save**

**Option B: Use vercel.json (Already Created)**
- The `vercel.json` file in the root directory will handle this automatically
- Commit and push it to trigger a new deployment

---

### Step 2: Set Environment Variables in Vercel

Go to **Settings** → **Environment Variables** and add these:

#### Required Variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://thompsondaiminah.vercel.app` | Production, Preview, Development |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | Production, Preview, Development |
| `NEXT_PUBLIC_API_URL` | Your backend API URL (or leave empty if not using) | Production, Preview, Development |

**How to add:**
1. Click **Add New**
2. Enter **Key** (variable name)
3. Enter **Value**
4. Select all environments: ✅ Production ✅ Preview ✅ Development
5. Click **Save**
6. Repeat for each variable

---

### Step 3: Redeploy

After setting environment variables:
1. Go to **Deployments** tab
2. Click the **three dots** (•••) on the latest deployment
3. Click **Redeploy**
4. Check **"Use existing Build Cache"** is OFF
5. Click **Redeploy**

---

## 🔍 Verify Deployment

After redeployment completes:

1. **Check Build Logs**
   - Go to the deployment
   - Click on **Building** step
   - Look for errors (should show "Build Completed")

2. **Test Your Site**
   - Visit: https://thompsondaiminah.vercel.app
   - Should see your homepage, not 404
   - Check browser console for errors

3. **Verify Environment Variables**
   - Open browser DevTools → Console
   - Type: `window.location.origin`
   - Should match your site URL

---

## 🐛 If Still Getting 404

### Check 1: Verify Root Directory
```bash
# In Vercel Settings → General → Root Directory
Should be: client
NOT: . (dot)
```

### Check 2: Check Build Command
```bash
# In Vercel Settings → General → Build & Development Settings
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Check 3: Review Build Logs
Look for these errors:
- ❌ "Module not found"
- ❌ "Cannot find package"
- ❌ "Build failed"
- ✅ "Build completed in X seconds"

---

## 📝 Quick Checklist

Before asking for help, verify:

- [ ] Root Directory is set to `client` in Vercel
- [ ] All environment variables are added
- [ ] Redeployed after setting env vars
- [ ] Build logs show "Build Completed"
- [ ] No TypeScript errors in build logs
- [ ] `vercel.json` is committed and pushed

---

## 🆘 Common Issues

### Issue: "Module not found: Can't resolve '@/components/...'"
**Fix:** This is a TypeScript path alias issue. Check `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Images return 404
**Fix:** Make sure `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set in Vercel

### Issue: API calls fail
**Fix:** Set `NEXT_PUBLIC_API_URL` to your backend URL (or remove API calls if not ready)

---

## 📞 Need Help?

If still getting 404 after following all steps:
1. Share the build logs from Vercel
2. Verify the Root Directory setting
3. Check if environment variables are visible in deployment logs
