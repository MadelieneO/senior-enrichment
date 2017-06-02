'use strict'

const api = require('express').Router()
const Student = require('../../db/models/student')
//const Campus = require('../../db/models/campus')

// Get all students: '/api/students'
api.get('/', function(req, res, next) {
	Student.findAll()
	.then(students => res.send(students))
	.catch(next)
})

// Get specific student
api.get('/:id', function(req, res, next) {
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
api.post('/', function(req, res, next) {
	Student.create(req.body)
	.then(createdStudent => {
		res.status(201).send(createdStudent)
	})
	.catch(next)
})

// Delete a student
api.delete('/', function(req, res, next) {
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

module.exports = api;

// Test data:

  // Campus.bulkCreate([{name: 'Fullstack'}, {name: 'Academy'}])
	// .then(campuses => {
	// 	console.log('~~~>>> CAMPUSES CREATED: ', campuses)
	// 	return Student.bulkCreate([
	// 		{name: 'Mark Zucks', email: 'mark@fb.com', campusId: 1},
	// 		{name: 'Crazy Coder', email: 'fooder@chocolatebar.com', campusId: 1},
	// 		{name: 'Jessy Script', email: 'j@script.com', campusId: 1},
	// 		{name: 'Lacy Loader', email: 'lacy@loader.com', campusId: 2},
	// 		{name: 'Bob Builder', email: 'bob@build.com', campusId: 2}
	// 	])
	// })
	// .then(students => {
	//   console.log('~~~>>> STUDENTS CREATED: ', students)
	// })
	// .catch(next)
