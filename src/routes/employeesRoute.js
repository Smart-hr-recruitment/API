const express = require('express');

const router = express.Router();

const { employeesController } = require('../controllers');

router.get('/', employeesController.getAll);
router.post('/', employeesController.create);
router.get('/:employeeId', employeesController.getById);
router.put('/:employeeId', employeesController.updateById);
router.delete('/:employeeId', employeesController.deleteById);

module.exports = router;
