'use strict'

const api = require('express').Router()
//const db = require('../../db')
const Campus = require('../../db/models/campus')

// Get all campuses
api.get('/', function(req, res, next) {
	Campus.findAll()
	.then(campuses => res.send(campuses))
	.catch(next)
})

// Get specific campus
api.get('/:id', function(req, res, next) {
	console.log('WHOOOOOOOOOOOO -------------------->>>>> api.get campuses, id: ', req.params.id)
	Campus.findById(+req.params.id)
	.then(campusFound => {
		if (!campusFound) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err;
    }
		res.send(campusFound)
	})
	.catch(next)
})

// Add a campus
api.post('/', function(req, res, next) {
	Campus.create(req.body)
	.then(createdCampus => {
		res.status(201).send(createdCampus)
	})
	.catch(next)
})

// Delete a campus
api.delete('/', function(req, res, next) {
	const id = +req.params.id;
	Campus.findById(id)
	.then(campusFound => {
		if(!campusFound) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err;
		}
		return campusFound.destroy();
	})
	.then(destroyedCampus => {
		console.log('~~~ campus has been DESTROYED: ', destroyedCampus)
		res.send(200);
	})
	.catch(next)
	// Campus.destroy({
	// 	where: {
	// 		id: id
	// 	}
	// })
	// .then(affectedRow => {
	// 	console.log('~~~ deleted row/campus: ', affectedRow)
	// 	res.send(200)
	// })
	// .catch(next)
})

module.exports = api;
