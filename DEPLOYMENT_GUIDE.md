# Dashboard App Deployment Guide

## Deployment Overview
This project consists of:
- **Frontend**: React app deployed on Vercel
- **Backend**: Node.js Express server with WebSocket support deployed on Railway

## Prerequisites
- GitHub account
- Vercel account (free tier available)
- Railway account (free tier available)

---

## Step 1: Deploy Backend to Railway

### 1.1 Push code to GitHub
```bash
cd c:\Users\acrt\projects\dashboard-project
git init
git add .
git commit -m "Initial commit - Dashboard app with backend"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dashboard-project.git
git push -u origin main
```

### 1.2 Create Railway Account
- Go to https://railway.app
- Sign in with GitHub
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your `dashboard-project` repository

### 1.3 Configure Railway
- Select `/server` as the root directory
- Railway will auto-detect Node.js
- Add environment variables:
  - `PORT`: `5000`
  - `NODE_ENV`: `production`
  - `CORS_ORIGIN`: (leave blank for now, update after frontend deployment)

### 1.4 Deploy
- Click "Deploy"
- Wait for deployment to complete
- Copy your Railway URL (e.g., `https://dashboard-backend-production-xxxx.railway.app`)

---

## Step 2: Deploy Frontend to Vercel

### 2.1 Update Backend URL
In `client/.env.production`:
```
REACT_APP_API_URL=https://your-railway-url.railway.app
REACT_APP_WS_URL=wss://your-railway-url.railway.app
```

### 2.2 Deploy to Vercel
- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Select `client` as the root directory

### 2.3 Configure Environment Variables
- `REACT_APP_API_URL`: Your Railway backend URL
- `REACT_APP_WS_URL`: Your Railway backend URL (wss://)

### 2.4 Deploy
- Click "Deploy"
- Your frontend will be live at `https://YOUR_APP_NAME.vercel.app`

---

## Step 3: Update Backend CORS

Go back to Railway and update:
- `CORS_ORIGIN`: `https://YOUR_APP_NAME.vercel.app`

---

## Verification
1. Open your Vercel URL in browser
2. Login with your credentials
3. Check that widgets load and update in real-time
4. Open DevTools console to verify no CORS errors

---

## Troubleshooting

### WebSocket Connection Issues
- Check that Railway backend is running
- Verify CORS_ORIGIN matches your Vercel URL
- Check browser console for error messages

### Build Fails
- Ensure all dependencies are in package.json
- Check Node version compatibility (>=18.0.0)
- Review build logs in Vercel/Railway dashboards

### 404 on Frontend Routes
- Vercel automatically handles React routing with vercel.json

---

## Files Created for Deployment
- `client/vercel.json` - Vercel configuration
- `client/.env.production` - Frontend production environment
- `server/.env.example` - Backend environment example
- `server/Procfile` - Railway start configuration
- `server/package.json` - Updated with start script and Node version requirement

---

## Next Steps (Optional)
1. Add database integration (MongoDB, PostgreSQL)
2. Implement user authentication
3. Set up CI/CD pipeline
4. Add monitoring and logging
5. Configure custom domain

