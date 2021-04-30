const router = require('express').Router();

const { getMe } = require('./users-controller');

router.route('/')
  .get(getMe);

// router.get('/', getAllUsers);
// router.get('/me', getMe);
// router.get('/search', search);

// router.route('/:user_id')
//   .all(adminAuth)
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;