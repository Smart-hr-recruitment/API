const router = require('express').Router();

const usersRoutes = require('./usersRoute');
const employeesRoutes = require('./employeesRoute');
const positionsRoutes = require('./positionsRoute');
const vacanciesRoutes = require('./vacanciesRoute');
const vacancySkillsRoutes = require('./vacancySkillsRoute');
const positionSkillsRoutes = require('./positionSkillsRoute');
const employeeSkillsRoutes = require('./employeeSkillsRoute');

router.use('/users', usersRoutes);
router.use('/employees', employeesRoutes);
router.use('/positions', positionsRoutes);
router.use('/vacancies', vacanciesRoutes);
router.use('/vacancies/skills', vacancySkillsRoutes);
router.use('/positions/skills', positionSkillsRoutes);
router.use('/employees/skills', employeeSkillsRoutes);

module.exports = router;