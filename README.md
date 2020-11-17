# Fullstack-todo-app
React Frontend + Django Backend Todo App :)

# Application Preview

## FRONTEND

<p align="center">
  <img src="https://github.com/YashMarmat/Pages-App-django/blob/master/templates/frontend%20preview.png" width="90%">
</p>

## BACKEND

<p align="center">
  <img src="https://github.com/YashMarmat/Pages-App-django/blob/master/templates/backend%20preview.png" width="90%">
</p>

# Note 1: Code Updation
This todo app is the updated version of Previous React Todo App (created in pure react js, link <a href="https://github.com/YashMarmat/TODO-APP-in-React">here</a>), a lot of code is being changed to manage both the performance and backend. I tried to keep the code as simple as possible. Also, one of the advantage of using django as a backend is the handling of ID's becomes much easier (no longer need to create seperate id's for each item, gets generated automatically by django).

# Note 2: Running the Application
# BACKEND
For the backend part you just need to locate the folder path (just open backend folder in terminal and run the following codes)

### install django
`pipenv install django==3.0`

### run virtual environment
`pipenv shell` 

# FRONTEND
For frontend you need to create a new react app, because my repository doesn't contain node modules folder. After creating the react app replace your react files
with these files present in my repository.

-App.js (inside src folder)

-App.css  (inside src folder)

-index.html (inside public folder)

### next steps
after this install following dependecies in the frontend folder,

`npm install axios`

`npm install react-bootstrap bootstrap`

`npm install --save font-awesome`

### run both servers
open two terminal windows one for backend and one for frontend, like shown below


<p align="center">
  <img src="https://github.com/YashMarmat/Pages-App-django/blob/master/templates/last%20update.png" width="90%">
</p>

<p align="center">
  <img src="https://github.com/YashMarmat/Pages-App-django/blob/master/templates/frontend%20commands.png" width="90%">
</p>

### in backend run
`python manage.py runserver`

### in frontend run
`npm start`

# all done !

# Happy Coding :)

