const router = require('express').Router();

const { positionsController } = require('../controllers');

router.get('/', positionsController.getAll);
router.post('/', positionsController.create);
router.get('/:positionId', positionsController.getById);
router.put('/:positionId', positionsController.updateById);
router.delete('/:positionId', positionsController.deleteById);

module.exports = router;
