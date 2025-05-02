const Employee = require('../models/employee.model');

// Function to get all employees
const getAllEmployees = async () => {
    try {
        const employees = await Employee.findAll();
        return employees;
    } catch (error) {
        throw new Error('Error fetching employees: ' + error.message);
    }
};

// Function to get an employee by username
const getEmployeeByUsername = async (username) => {
    try {
        const employee = await Employee.findOne({
            where: { username },
        });
        return employee;
    } catch (error) {
        throw new Error('Error fetching employee by username: ' + error.message);
    }
};

// Function to create a new employee
const createEmployee = async (data) => {
    try {
        const employee = await Employee.create(data);
        return employee;
    } catch (error) {
        throw new Error('Error creating employee: ' + error.message);
    }
};

module.exports = { getAllEmployees, getEmployeeByUsername, createEmployee };
