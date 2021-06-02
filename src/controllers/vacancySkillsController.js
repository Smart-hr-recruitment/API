const { VacancySkill } = require('smart-models-db');

exports.getAll = async (req, res, next) => {
    const { vacancyId } = req.params;

    try {
        const vacancySkills = await VacancySkill
            .find({ vacancy_id: vacancyId })
            .populate({ path: 'skills' })
            .lean();
        
        return res.status(200).json({ data: vacancySkills });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.getById = async (req, res, next) => {
    const { skillId } = req.params;

    try {
        const vacancySkill = await VacancySkill
                            .findById(skillId)
                            .lean()
                            .exec();
  
        return res.status(200).json({ data: vacancySkill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.create = async (req, res, next) => {
    const { vacancyId } = req.params;
    const { skill_name } = req.body;

    const created = {
        skill_name: skill_name,
        vacancy_id: vacancyId
    };

    try {
        const vacancySkill = await VacancySkill.create(created);
                
        return res.status(201).json({ data: vacancySkill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.updateById = async (req, res, next) => {
    const { skillId } = req.params;
    const { skill_name } = req.body;

    const filter = { _id: skillId };

    const updated = {
        $set: { skill_name: skill_name }
    };

    const options = { new: true, runValidators: true };

    try {
        const vacancySkill = await VacancySkill.findByIdAndUpdate(filter, updated, options);
                
        return res.status(200).json({ data: vacancySkill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.deleteById = async (req, res, next) => {
    const { skillId } = req.params;

    try {
        await VacancySkill.deleteOne({ _id: skillId });
        
        return res.status(200).json({
          message: "Vacancy's skill was deleted.",
        });
    } catch(e) {
        console.log(e);
        next(e);
    }
};