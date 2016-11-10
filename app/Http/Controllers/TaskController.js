'use strict'

const Task = use("App/Model/Task")


class TaskController {
	* index (request,response){
		let userId = request.param('id')
		let listId = request.param("listId")

	}

	* create (request,response){
		let userId = request.param('id')
		let listId = request.param("listId")
		let data = request.all()
		data.todo_list_id = listId
		console.log(data);
		let task = yield Task.create(data)
		response.status(201).json(task)
		

	}
	* erase (request,response){

	}
	* update (request,response){

	}


}

module.exports = TaskController
