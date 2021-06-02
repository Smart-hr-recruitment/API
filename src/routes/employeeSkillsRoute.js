const router = require('express').Router();

const { employeeSkillsController } = require('../controllers');

router.get('/:employeeId', employeeSkillsController.getAll);
router.post('/:employeeId', employeeSkillsController.create);
router.get('/:employeeId/:skillId', employeeSkillsController.getById);
router.put('/:employeeId/:skillId', employeeSkillsController.updateById);
router.delete('/:employeeId/:skillId', employeeSkillsController.deleteById);

module.exports = router;
