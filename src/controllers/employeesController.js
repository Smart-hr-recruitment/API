const { Employee, Vacancy } = require('smart-models-db');

const { createVacancySkills } = require('../helpers/createVacancySkills');

exports.getAll = async (req, res, next) => {
    try {
        const employees = await Employee
            .find()
            .populate({ path: 'position', select: 'position_name' })
            .populate({ path: 'skills', select: 'skill_name -employee_id' })
            .lean();
        
        return res.status(200).json({ data: employees });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.getById = async (req, res, next) => {
    const employeeId = req.params.employeeId;

    try {
        const employee = await Employee
                            .findById(employeeId)
                            .populate({ path: 'position', select: 'position_name' })
                            .populate({ path: 'skills', select: 'skill_name -employee_id' })
                            .lean()
                            .exec();
  
        return res.status(200).json({ data: employee });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.create = async (req, res, next) => {
    const { full_name, email, position_id } = req.body;

    const created = {
        full_name: full_name,
        email: email,
        position_id: position_id
    };

    try {
        const employee = await Employee.create(created);
                
        return res.status(201).json({ data: employee });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.updateById = async (req, res, next) => {
    const { full_name } = req.body;

    const filter = { _id: req.params.employeeId };

    const updated = {
        $set: { full_name: full_name }
    };

    const options = { new: true, runValidators: true };

    try {
        const employee = await Employee.findByIdAndUpdate(filter, updated, options);
                
        return res.status(200).json({ data: employee });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.deleteById = async (req, res, next) => {
    const employeeId = req.params.employeeId;

    const employee = await Employee
                            .findById(employeeId)
                            .populate({ path: 'position', select: 'position_name' })
                            .populate({ path: 'skills', select: 'skill_name -employee_id' })
                            .lean()
                            .exec();

    const { position, skills } = employee;

    await createVacancySkills(position, skills);

    try {
        await Employee.deleteOne({ _id: employeeId });

        return res.status(200).json({
          message: 'Employee was deleted.',
        });
    } catch(e) {
        console.log(e);
        next(e);
    }
};