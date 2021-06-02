const { PositionSkill } = require('smart-models-db');

exports.getAll = async (req, res, next) => {
    const { positionId } = req.params;

    try {
        const skills = await PositionSkill
            .find({ position_id: positionId })
            .populate({ path: 'skills' })
            .lean();
        
        return res.status(200).json({ data: skills });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.getById = async (req, res, next) => {
    const { skillId } = req.params;

    try {
        const skill = await PositionSkill
                            .findById(skillId)
                            .lean()
                            .exec();
  
        return res.status(200).json({ data: skill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.create = async (req, res, next) => {
    const { positionId } = req.params;
    const { skill_name } = req.body;

    const created = {
        skill_name: skill_name,
        position_id: positionId
    };

    try {
        const skill = await PositionSkill.create(created);
                
        return res.status(201).json({ data: skill });
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
        const skill = await PositionSkill.findByIdAndUpdate(filter, updated, options);
                
        return res.status(200).json({ data: skill });
    } catch(e) {
        console.log(e);
        next(e);
    }
};

exports.deleteById = async (req, res, next) => {
    const { skillId } = req.params;

    try {
        await PositionSkill.deleteOne({ _id: skillId });
        
        return res.status(200).json({
          message: "Position's skill was deleted.",
        });
    } catch(e) {
        console.log(e);
        next(e);
    }
};