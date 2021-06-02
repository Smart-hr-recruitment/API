const router = require('express').Router();

const { vacanciesController } = require('../controllers');

router.get('/', vacanciesController.getAll);
router.post('/', vacanciesController.create);
router.get('/:vacancyId', vacanciesController.getById);
router.put('/:vacancyId', vacanciesController.updateById);
router.delete('/:vacancyId', vacanciesController.deleteById);

module.exports = router;
