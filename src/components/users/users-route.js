const router = require('express').Router();

const {
  getAllUsers, getUser, updateUser, deleteUser, getMe, search
} = require('./users-controller');

router.get('/', getAllUsers);
router.get('/me', getMe);
router.get('/search', search);

router.route('/:user_id')
  .all(adminAuth)
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;