## Blog application
The App uses Django in the backend and React in the frontend.

### Features:
1. User can view, create, update or delete posts
2. All posts are displayed together with latest posts at top, paginated with 10 posts per page.
3. Each post has its own link and can be viewed in detail.
4. Post can be saved as draft or be published.
5. Authentication is available, i.e, user can signup, login & logout.

### Set up instructions:
1. Clone the repo
2. Create a virtual env for Django setup and activate the venv.
3. Install the required packages, run the Django server:
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
4.For React frontend:
```
npm install
npm run build
npm start
```

#### Note:
To create an account, append /signup to the url: http://localhost:3000/signup

Similarly, to login:
http://localhost:3000/login
