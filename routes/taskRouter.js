const route = require('express').Router();



const {getTasks} = require('../controllers/taskController');


// route.get('/tasks',getTasks)
route.route('/').get(getTasks)

module.exports = route 