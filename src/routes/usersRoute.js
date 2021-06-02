const express            = require('express');
const router             = express.Router();
const validations        = require('../validations');
const { userController } = require('../controllers');

router.get('/:userId', validations.userValidation, userController);

module.exports = router;
