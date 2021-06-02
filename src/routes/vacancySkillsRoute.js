const router = require('express').Router();

const { vacancySkillsController } = require('../controllers');

router.get('/:vacancyId', vacancySkillsController.getAll);
router.post('/:vacancyId', vacancySkillsController.create);
router.get('/vacancyId/:skillId', vacancySkillsController.getById);
router.put('/vacancyId/:skillId', vacancySkillsController.updateById);
router.delete('/vacancyId/:skillId', vacancySkillsController.deleteById);

module.exports = router;
