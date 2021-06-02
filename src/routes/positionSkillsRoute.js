const router = require('express').Router();

const { positionSkillsController } = require('../controllers');

router.get('/:positionId', positionSkillsController.getAll);
router.post('/:positionId', positionSkillsController.create);
router.get('/positionId/:skillId', positionSkillsController.getById);
router.put('/positionId/:skillId', positionSkillsController.updateById);
router.delete('/positionId/:skillId', positionSkillsController.deleteById);

module.exports = router;
