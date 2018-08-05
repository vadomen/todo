# To Do API

API service for To Do application. To start API separately run `npm start`.

## Allowed endpoints
 
### For Tasks, Categories
 - GET `http://localhost:3000/tasks` list of tasks
 - GET `http://localhost:3000/tasks/{_id}` single item
 - GET `http://localhost:3000/tasks/{_id}?populate=categories` with populated categories
 - POST `http://localhost:3000/tasks` create a new item
 - PUT `http://localhost:3000/tasks/{_id}` update item

 - GET`http://localhost:3000/categories` list of categories
 - GET`http://localhost:3000/categories/{_id}` single item
 - POST `http://localhost:3000/categories` create a new item
 - PUT `http://localhost:3000/categories/{_id}` update item
