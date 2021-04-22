const router = require('express').Router();

const usersRoutes = require('../../components/users/users-route');
const documentsRoutes = require('../../components/documents/documents-route');

router.use('/users', usersRoutes);
router.use('/documents', documentsRoutes);

module.exports = router;