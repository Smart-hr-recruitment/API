const router = require('express').Router();

const { combine } = require('../middlewares');

const employeesRoutes = require('./employeesRoute');
const positionsRoutes = require('./positionsRoute');
const vacanciesRoutes = require('./vacanciesRoute');
const vacancySkillsRoutes = require('./vacancySkillsRoute');
const positionSkillsRoutes = require('./positionSkillsRoute');
const employeeSkillsRoutes = require('./employeeSkillsRoute');

/*
 Composing multiple middleware functions
 into a single request middleware handler
*/
router.use(combine);

router.use('/employees', employeesRoutes);
router.use('/positions', positionsRoutes);
router.use('/vacancies', vacanciesRoutes);
router.use('/vacancies/skills', vacancySkillsRoutes);
router.use('/positions/skills', positionSkillsRoutes);
router.use('/employees/skills', employeeSkillsRoutes);

module.exports = router;
