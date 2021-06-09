const { Vacancy, VacancySkill } = require('smart-models-db');

exports.createVacancySkills = async (position, skills) => {
  const vacancy = await Vacancy.create({ vacancy_name: position.position_name });

  const vacancySkills = [];
  skills.forEach((skill) => {
    const vSkill = new VacancySkill({ vacancy_id: vacancy._id, skill_name: skill.skill_name });
    vacancySkills.push(vSkill);
  });

  const createdVacancySkills = await VacancySkill.insertMany(vacancySkills);
  return createdVacancySkills;
};
