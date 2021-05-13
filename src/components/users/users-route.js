const router  = require('express').Router();
const {getMe} = require('./users-controller');// import all file

router.route('/')
  .get(getMe);

// TODO: refactor this part
// router.get('/', getAllUsers);
// router.get('/me', getMe);
// router.get('/search', search);

// router.route('/:user_id')
//   .all(adminAuth)
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;


module.exports = {
  valkdbqfljakdgvfa/sd    : aboutData,
  workData     : workData,
  portfolioData: portfolioData,
  memberData   : memberData,
  socialData   : socialData,
  userData     : userData
};
