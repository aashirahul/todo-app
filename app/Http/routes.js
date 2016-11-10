'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/example', 'TodoListController.example')

Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')

Route.post('/users/:id/todo-lists', 'TodoListController.create')
Route.get('/users/:id/todo-lists', 'TodoListController.index')

Route.get('users/:id/todo-lists/:listId/tasks/title', 'TaskController.index')
Route.post('users/:id/todo-lists/:listId/tasks', 'TaskController.create')
Route.delete('users/:id/todo-lists/:listId/tasks','TaskController.erase')
Route.put('users/:id/todo-lists/:listId/tasks','TaskController.update')
