# Portfolio Website

A modern, responsive portfolio website built with React and Node.js featuring a glassmorphism design with neon accents.

## Features

- 🎨 Modern glassmorphism design with neon effects
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 📧 Working contact form with backend integration
- 🚀 Fast loading and optimized performance
- 🎯 Clean, professional layout

## Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Custom CSS animations
- Responsive grid layouts

### Backend
- Node.js
- Express.js
- MongoDB (optional)
- Nodemailer for email notifications

## Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your configuration

npm run dev
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio  # Optional
EMAIL_USER=your-email@gmail.com                 # Optional
EMAIL_PASS=your-app-password                     # Optional
RECIPIENT_EMAIL=your-email@gmail.com             # Optional
```

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Navbar.jsx
│   │   ├── styles/
│   │   │   └── main.css
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── routes/
│   │   └── contact.js
│   ├── models/
│   │   └── Message.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Customization

### Personal Information
Update the following files with your information:
- `frontend/src/components/Hero.jsx` - Name and title
- `frontend/src/components/About.jsx` - About section content
- `frontend/src/components/Skills.jsx` - Your skills and technologies
- `frontend/src/components/Projects.jsx` - Your projects
- `frontend/src/components/Contact.jsx` - Contact information

### Styling
- Main styles: `frontend/src/styles/main.css`
- Colors and effects can be customized in the CSS file
- Tailwind classes can be modified in components

## Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set environment variables in your hosting platform
# Deploy the backend folder
```

## License

