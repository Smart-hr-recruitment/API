const { EmployeeSkill } = require('smart-models-db');

exports.getAll = async (req, res, next) => {
    const { employeeId } = req.params;

    try {
        const employeeSkills = await EmployeeSkill
            .find({ employee_id: employeeId })
            .populate({ path: 'skills', select: 'skill_name' })
            .lean();
        
        return res.status(200).json({ data: employeeSkills });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.getById = async (req, res, next) => {
    const skillId = req.params.skillId;

    try {
        const employeeSkill = await EmployeeSkill
                            .findById(skillId)
                            .lean();
  
        return res.status(200).json({ data: employeeSkill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.create = async (req, res, next) => {
    const { employeeId } = req.params;
    const { skill_name } = req.body;

    const created = {
        skill_name: skill_name,
        employee_id: employeeId
    };

    try {
        const employeeSkill = await EmployeeSkill.create(created);
        console.log('employeeSkill: ', employeeSkill);
        return res.status(201).json({ data: employeeSkill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.updateById = async (req, res, next) => {
    const { employeeId, skillId } = req.params;
    const { skill_name } = req.body;

    const filter = { _id: skillId, employee_id: employeeId };

    const updated = {
        $set: { skill_name: skill_name }
    };

    const options = { new: true, runValidators: true };

    try {
        const employeeSkill = await EmployeeSkill.findByIdAndUpdate(filter, updated, options);
                
        return res.status(200).json({ data: employeeSkill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.deleteById = async (req, res, next) => {
    const { skillId } = req.params;

    try {
        await EmployeeSkill.deleteOne({ _id: skillId });
        
        return res.status(200).json({
          message: "Employee's skill was deleted.",
        });
    } catch(e) {
        console.log(e);
        next(e);
    }
};