'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models/campus')
const Student = require('../db/models/student')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// Get all students
api.get('/students', function(req, res, next) {
	Student.findAll()
	.then(students => res.send(students))
	.catch(next)
})

// Get specific student
api.get('/students/:id', function(req, res, next) {
	Student.findById(+req.params.id)
	.then(studentFound => {
		if (!studentFound) {
      const err = Error('Student not found');
      err.status = 404;
      throw err;
    }
		res.send(studentFound)
	})
	.catch(next)
})

// Add a student
api.post('/students', function(req, res, next) {
	Student.create(req.body)
	.then(createdStudent => {
		res.status(201).send(createdStudent)
	})
	.catch(next)
})

// Delete a student
api.delete('/students', function(req, res, next) {
	console.log('~~~ in .delete - req.params.id: ', req.params.id)
	const id = +req.params.id;
	Student.findById(id)
	.then(studentFound => {
		if(!studentFound) {
      const err = Error('Student not found');
      err.status = 404;
      throw err;
		}
		return studentFound.destroy();
	})
	.then(destroyedStudent => {
		console.log('~~~ student has been DESTROYED: ', destroyedStudent)
		res.send(200);
	})
	.catch(next)
	// Student.destroy({
	// 	where: {
	// 		id: id
	// 	}
	// })
	// .then(affectedRow => {
	// 	console.log('~~~ deleted row/student: ', affectedRow)
	// 	res.send(200)
	// })
	// .catch(next)
})

module.exports = api

	// Campus.create({
	// 	name: 'Fullstack'
	// })
	// .then(campus => {
	// 	console.log('~~~ CAMPUS CREATED: ', campus.name)
	// 	return Student.create({
	// 	  name: 'Crazy Coder',
	// 	  email: 'fooder@chocolatebar.com',
	// 	  campusId: campus.id
	// 	})
	// })
	// .then(student => {
	//   console.log('~~~ STUDENT CREATED: ', student.name)
	// })
	// .catch(next)

	// Campus.create({
	// 	name: 'Academy'
	// })
	// .then(campus => {
	// 	console.log('~~~ CAMPUS CREATED: ', campus.name)
	// 	return Student.bulkCreate([
	// 		{name: 'Jessy Script', email: 'j@script.com', campusId: campus.id},
	// 		{name: 'Lacy Loader', email: 'lacy@loader.com', campusId: campus.id},
	// 		{name: 'Bob Builder', email: 'bob@build.com', campusId: campus.id}
	// 	])
	// })
	// .then(student => {
	//   console.log('~~~ STUDENT CREATED: ', student.name)
	// })
	// .catch(next)