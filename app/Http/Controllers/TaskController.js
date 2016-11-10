'use strict'

const Task = use("App/Model/Task")


class TaskController {
	* index (request,response){
		let userId = request.param('id')
		let listId = request.param("listId")
		let tasks = yield Task.query().where('todo_list_id',listId).fetch()
		response.json(tasks)

	}

	* create (request,response){
		let userId = request.param('id')
		let listId = request.param("listId")
		let data = request.all()
		data.todo_list_id = listId
		let task = yield Task.create(data)
		response.status(201).json(task)
		

	}
	* erase (request,response){
		let taskId = request.param("taskId")
		let task = yield Task.findBy('id',taskId)
		yield task.delete()
		response.status(200)


	}
	* update (request,response){
		let taskId = request.param("taskId")
		let task = yield Task.findBy('id',taskId)
		let data = request.all()
		task.fill(data)
		yield task.save()
		response.status(200).json(task)
	}


}

module.exports = TaskController
