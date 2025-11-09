# EZ Labs — Home Page (Frontend Intern Assignment)

Single-page React + Vite app implementing the Home page and contact form with API integration.

## Features
- Responsive layout (mobile → desktop)
- Contact form with client-side validation (required fields + email format)
- POST to `https://vernanbackend.ezlab.in/api/contact-us/`
- Loading state, Reset button, and success message ("Form Submitted")

## Stack
- React (Vite)
- Plain CSS (mobile-first)

## How to run locally
1. Create the project (or use supplied files):
```bash
npm create vite@latest ezlabs-home -- --template react
cd ezlabs-home
# replace src/ and index.html with the repo files
npm install
npm run dev
# open http://localhost:5173
