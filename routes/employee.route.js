const express = require('express');
const { getEmployees, getEmployee, addEmployee } = require('../controllers/employee.controller');
const router = express.Router();

// Routes for employee operations
router.get('/employees', getEmployees);
router.get('/employees/:username', getEmployee);
router.post('/employees', addEmployee);

module.exports = router;
