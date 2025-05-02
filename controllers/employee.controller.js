const { getAllEmployees, getEmployeeByUsername, createEmployee } = require('../services/employee.service');

// Controller function to get all employees
const getEmployees = async (req, res) => {
    try {
        const employees = await getAllEmployees();
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get an employee by username
const getEmployee = async (req, res) => {
    const { username } = req.params;
    try {
        const employee = await getEmployeeByUsername(username);
        if (employee) {
            res.json({ employee });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a new employee
const addEmployee = async (req, res) => {
    const data = req.body;
    try {
        const employee = await createEmployee(data);
        res.status(201).json({ employee });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getEmployees, getEmployee, addEmployee };
