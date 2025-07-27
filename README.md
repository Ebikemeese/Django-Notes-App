# 📝 Django Notes App

A full-stack note-taking application built with Django and React, designed for simplicity, speed, and a modern user experience. This app allows users to create, edit, and delete personal notes with a sleek, responsive interface.

## 🚀 Features

- ✍️ Create, edit, and delete notes
- 🌐 RESTful API powered by Django REST Framework
- ⚡ Fast frontend experience using React + Vite
- 🎨 Stylish design with Bootstrap and React Icons
- 🔄 Real-time UI feedback with Toast notifications and spinners

## 🧰 Tech Stack

### Backend (Django)
- `Django==5.2.4`
- `djangorestframework==3.16.0`
- `django-cors-headers==4.7.0`
- `sqlparse==0.5.3`
- `asgiref==3.9.1`
- `tzdata==2025.2`

### Frontend (React)
- `React 19`, `React DOM`, `React Router DOM`
- `Bootstrap 5`, `React Icons`
- `Axios` for HTTP requests
- `React Toastify`, `React Spinners`
- Development tooling with `Vite`, `ESLint`

## 🛠️ Setup Instructions

### Backend

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Ebikemeese/Django-Notes-App.git
   cd Django-Notes-App

2. **Set up a virtual environment
   ```
   cd django-notes-backend
   python -m venv env or venv
   source env/bin/activate  # or env\Scripts\activate on Windows
3. **Install dependencies
   ```
   pip install -r requirements.txt
4. **- Run migrations and start the server
   ```
   python manage.py migrate
   python manage.py runserver
5. **Create super user and add some notes or do it using the api
   ```
   python manage.py createsuperuser
6. **Visit the url
   ```
   http://127.0.0.1:8000/api/v1/notes
   
### Frontend

1. **Navigate to frontend folder
   ```
   cd notes-app-frontend/react-note-app
2. **Install Node modules
   ```
   npm install
3. **Start development server
   ```
   npm run dev
6. **Visit the url
   ```
   http://localhost:5173/


   
   

