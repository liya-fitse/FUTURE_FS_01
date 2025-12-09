# Deployment Guide

## Frontend Deployment (Netlify)

### Option 1: Drag & Drop (Easiest)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag the `frontend/build` folder to the deployment area
3. Your site will be live instantly!

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build settings:
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/build`

## Backend Deployment (Railway)

1. Go to [railway.app](https://railway.app) and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set the following environment variables:
   ```
   PORT=5000
   FRONTEND_URL=https://your-netlify-site.netlify.app
   EMAIL_USER=your-email@gmail.com (optional)
   EMAIL_PASS=your-app-password (optional)
   RECIPIENT_EMAIL=your-email@gmail.com (optional)
   ```
5. Set root directory to `backend`
6. Deploy!

## Update Frontend with Backend URL

After deploying the backend, update your frontend contact form to use the deployed backend URL instead of localhost.

## Quick Deploy Commands

### Frontend Build
```bash
cd frontend
npm install
npm run build
```

### Backend Test
```bash
cd backend
npm install
npm start
```

Your portfolio is now ready for deployment! 🚀